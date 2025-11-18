import React, { useState, useEffect, useMemo } from "react";
import { Container, Typography, Box } from "@mui/material";
import CompanyList from "./components/CompanyList";
import Filters from "./components/Filters";
import PaginationComp from "./components/Pagination";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const PER_PAGE = 6;

  // Fetch companies from JSON Server
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      setError(null);

      try {
        const controller = new AbortController(); // for timeout handling
        const timeout = setTimeout(() => controller.abort(), 10000);

        const res = await fetch("http://localhost:5000/companies", {
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) throw new Error(`Failed to fetch companies: ${res.status}`);

        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Invalid data format received");

        setCompanies(data);
      } catch (err) {
        if (err.name === "AbortError") {
          setError("Request timed out. Please try again.");
        } else {
          setError(err.message || "Something went wrong while fetching data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, location, industry, sortOrder]);

  // Filter and sort companies
  const filteredCompanies = useMemo(() => {
    let data = [...companies];

    data = data.filter((c) => {
      const name = c.name || "";
      const description = c.description || "";
      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
      );
    });

    if (location !== "All")
      data = data.filter((c) => c.location === location || c.location === null);

    if (industry !== "All")
      data = data.filter((c) => c.industry === industry || c.industry === null);

    data.sort((a, b) => {
      const nameA = a.name || "";
      const nameB = b.name || "";
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return data;
  }, [companies, search, location, industry, sortOrder]);

  const totalPages = Math.ceil(filteredCompanies.length / PER_PAGE);
  const paginatedCompanies = filteredCompanies.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const resetFilters = () => {
    setSearch("");
    setLocation("All");
    setIndustry("All");
    setSortOrder("asc");
    setPage(1);
  };

  if (loading)
    return <Typography textAlign="center">Loading companies...</Typography>;
  if (error)
    return (
      <Typography textAlign="center" color="error">
        {error}
      </Typography>
    );

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", py: 6 }}>
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          mx: "auto",
          marginLeft: 7,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Companies Directory
        </Typography>

        <Filters
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          industry={industry}
          setIndustry={setIndustry}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          resetFilters={resetFilters}
        />

        <Box sx={{ mt: 4, width: "100%" }}>
          {paginatedCompanies.length === 0 ? (
            <Typography textAlign="center">
              No companies found. Try changing your filters.
            </Typography>
          ) : (
            <CompanyList companies={paginatedCompanies} />
          )}
        </Box>

        {totalPages > 1 && (
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <PaginationComp page={page} total={totalPages} setPage={setPage} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
