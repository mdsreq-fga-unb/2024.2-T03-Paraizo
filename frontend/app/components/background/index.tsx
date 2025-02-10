"use client"
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import Header from "../header/header";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <>
    <Header/>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: "#739DABBF"
        }}
      >
        {children}
      </Box>
    </>
  );
}