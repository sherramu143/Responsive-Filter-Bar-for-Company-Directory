import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Filters({
  search,
  setSearch,
  location,
  setLocation,
  industry,
  setIndustry,
  sortOrder,
  setSortOrder,
  resetFilters,
}) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2, width: "100%", alignItems: "center" }}
    >
      {/* Search */}
      <Grid item xs={12} sm={6} md={3} lg={2.4}>
        <TextField
          fullWidth
          size="small"
          label="Search Companies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>

      {/* Location */}
      <Grid item xs={12} sm={6} md={3} lg={2.4}>
        <FormControl fullWidth size="small">
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          >
            <MenuItem value="All">All Locations</MenuItem>
            <MenuItem value="Bengaluru">Bengaluru</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Sort By */}
      <Grid item xs={12} sm={6} md={3} lg={2.4}>
        <FormControl fullWidth size="small">
          <InputLabel>Sort by Name</InputLabel>
          <Select
            value={sortOrder}
            label="Sort by Name"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="asc">A → Z (Ascending)</MenuItem>
            <MenuItem value="desc">Z → A (Descending)</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Industry */}
      <Grid item xs={12} sm={6} md={3} lg={2.4}>
        <FormControl fullWidth size="small">
          <InputLabel>Industry</InputLabel>
          <Select
            value={industry}
            label="Industry"
            onChange={(e) => setIndustry(e.target.value)}
          >
            <MenuItem value="All">All Industries</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Reset Button */}
      <Grid item xs={12} sm={6} md={3} lg={2.4}>
        <Button
          fullWidth
          variant="outlined"
          size="medium"
          onClick={resetFilters}
        >
          RESET
        </Button>
      </Grid>
    </Grid>
  );
}
