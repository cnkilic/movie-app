import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%" // Adjust height to center the spinner in the viewport or container
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
