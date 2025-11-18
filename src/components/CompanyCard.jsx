import React from "react";
import { Card, CardContent, Typography, CardActions, Button, Chip, Stack } from "@mui/material";

export default function CompanyCard({ company }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 320, md: 350 },
        borderRadius: 3,
        px: 2,
        py: 1,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
          {company.name}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ my: 1, flexWrap: "wrap" }}>
          <Chip label={company.industry} color="primary" size="small" />
          <Chip label={company.location} color="secondary" size="small" />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {company.description}
        </Typography>

        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          {company.employees} employees
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href={company.website} target="_blank">
          VISIT WEBSITE
        </Button>
      </CardActions>
    </Card>
  );
}
