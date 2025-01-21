"use client"
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/Rectangle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            xs: '40vh',
            sm: '50vh',
            md: '61.8vh',
          },
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          marginTop: {
            xs: '10vh',
            sm: '15vh',
            md: '18vh',
          },
          backgroundImage: 'url(/Rectangle1071.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            xs: '50vh',
            sm: '60vh',
            md: '71vh',
          },
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url(/Rectangle1072.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            xs: '50vh',
            sm: '60vh',
            md: '71vh',
          },
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url(/Rectangle1073.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            xs: '50vh',
            sm: '60vh',
            md: '71vh',
          },
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url(/Rectangle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)',
          height: {
            xs: '50vh',
            sm: '60vh',
            md: '71vh',
          },
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url(/Rectangle1078.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            xs: '50vh',
            sm: '60vh',
            md: '71vh',
          },
        }}
      ></Box>
    </>
  );
}