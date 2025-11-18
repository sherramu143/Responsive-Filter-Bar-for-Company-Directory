import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompanyList({ companies }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {companies.map((company) => (
        <Grid item xs={12} sm={6} md={4} key={company.id}>
          <CompanyCard company={company} />
        </Grid>
      ))}
    </Grid>
  );
}
