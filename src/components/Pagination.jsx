import React from "react";
import { Pagination as MuiPagination, Box } from "@mui/material";

export default function Pagination({ page, total, setPage }) {
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center", px: { xs: 2, sm: 0 } }}>
      <MuiPagination
        count={total}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
        size="small"
      />
    </Box>
  );
}
