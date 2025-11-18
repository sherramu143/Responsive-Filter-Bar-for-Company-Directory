import React, { useState, useMemo } from "react";
import { Container, Typography, Box } from "@mui/material";
import CompanyList from "./components/CompanyList";
import Filters from "./components/Filters";
import PaginationComp from "./components/Pagination";
import data from "../db.json"; // import static companies data

export default function App() {
  // Initialize state directly
  const [companies] = useState(data.companies);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const PER_PAGE = 6;

  // Reset page when filters change
  const resetFilters = () => {
    setSearch("");
    setLocation("All");
    setIndustry("All");
    setSortOrder("asc");
    setPage(1);
  };

  const filteredCompanies = useMemo(() => {
    let filtered = [...companies];

    // Search filter
    filtered = filtered.filter((c) => {
      const name = c.name || "";
      const description = c.description || "";
      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
      );
    });

    // Location filter
    if (location !== "All") {
      filtered = filtered.filter((c) => c.location === location);
    }

    // Industry filter
    if (industry !== "All") {
      filtered = filtered.filter((c) => c.industry === industry);
    }

    // Sort alphabetically
    filtered.sort((a, b) => {
      const nameA = a.name || "";
      const nameB = b.name || "";
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return filtered;
  }, [companies, search, location, industry, sortOrder]);

  const totalPages = Math.ceil(filteredCompanies.length / PER_PAGE);
  const paginatedCompanies = filteredCompanies.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
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
