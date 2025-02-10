"use client"
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Background from "@/app/components/background";
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function LandingPage(){
    return(
    <Background>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Grid sx={{ margin: 15}}>
          <Grid container direction="row" alignItems="center" >
            <Image src="/logo.svg" alt="description" width={150} height={150} />
            <Typography
                    sx={{
                      color: "white",
                      fontSize: 40,
                      marginLeft: 0,
                      marginTop: 10,
                      width: "100%"
                    }}
                  >
                    Espaço
                  </Typography>
          </Grid>
          <Grid >
            <Typography sx={{color: "white", fontSize: 60, fontFamily: "Rubik"}}>Janayna Paraizo</Typography>
          </Grid>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 22,                       fontFamily: "Rubik",
                      textAlign: "justify",
                      textJustify: "inter-word", }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi molestias totam in voluptate commodi eligendi minima debitis magnam, quas dolorem voluptatem blanditiis, corporis ducimus quasi nisi, eum corrupti cum!</Typography>
          </Grid>
        </Grid>
        <Grid sx={{margin: 15}} container direction="row" alignItems="center" justifyContent="center">
        <Image src="/fisioterapia.jpg" alt="description" width={600} height={600} />
        </Grid>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Grid sx={{ margin: 15}}>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 50, color: "black",}}>RPG</Typography>
          </Grid>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 22, color: "white",                       fontFamily: "Rubik",
                      textAlign: "justify",
                      textJustify: "inter-word", }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi molestias totam in voluptate commodi eligendi minima debitis magnam, quas dolorem voluptatem blanditiis, corporis ducimus quasi nisi, eum corrupti cum!</Typography>
          </Grid>
        </Grid>
        <Grid sx={{margin: 15}} container direction="row" alignItems="center" justifyContent="center">
        <Image src="/rep.jpg" alt="description" width={600} height={600} />
        </Grid>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Grid sx={{margin: 15}} container direction="row" alignItems="center" justifyContent="center">
        <Image src="/massagem_terapeutica_1.jpg" alt="description" width={600} height={600} />
        </Grid>
        <Grid sx={{ margin: 15}}>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 50, color: "black",}}>MASSAGEM</Typography>
          </Grid>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 22, color: "white",                       fontFamily: "Rubik",
                      textAlign: "justify",
                      textJustify: "inter-word", }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi molestias totam in voluptate commodi eligendi minima debitis magnam, quas dolorem voluptatem blanditiis, corporis ducimus quasi nisi, eum corrupti cum!</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
      <Grid sx={{width: "45vh", marginBottom: 10}}>
            <Typography sx={{fontSize: 50, color: "black",}}>Nossos Horários</Typography>
          </Grid>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=santosdodia@gmail.com&ctz=America%2FSao_Paulo"
              style={{ border: "0" }}
              width="900"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Box>
    </Background>
    )
}