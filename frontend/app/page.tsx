"use client"
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Background from "./components/background";
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PatientsPage from "./pages/patients_page/page";

export default function Home() {
  return (
    <section className="bg-paraizo-background">
    <PatientsPage/>
    {/* <Background>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Grid sx={{ margin: 10}}>
          <Grid container direction="row" alignItems="center" >
            <Image src="/logo.svg" alt="description" width={150} height={150} />
            <Typography sx={{color: "white", fontSize: 40, marginLeft: 3, marginTop:10,fontFamily: "Rubik"}}>Espaço</Typography>
          </Grid>
          <Grid >
            <Typography sx={{color: "white", fontSize: 60, fontFamily: "Rubik"}}>Janayna Paraizo</Typography>
          </Grid>
          <Grid sx={{width: "45vh"}}>
            <Typography sx={{fontSize: 22}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi molestias totam in voluptate commodi eligendi minima debitis magnam, quas dolorem voluptatem blanditiis, corporis ducimus quasi nisi, eum corrupti cum!</Typography>
          </Grid>
          <Grid sx={{width: "45vh", marginTop: 5, borderRadius: "30px"}}>
            <Button variant="contained" sx={{backgroundColor: "#739DAB", color: "white", fontSize: 20, fontFamily: "Rubik", width: "100%"}}>Conheça nossos serviços <KeyboardArrowDownIcon sx={{fontSize: 45, marginLeft: 3}}/></Button>
          </Grid>
        </Grid>
        <Grid sx={{margin: 10}} container direction="row" alignItems="center" justifyContent="center">
        <Image src="/Group3850.svg" alt="description" width={800} height={800} />
        </Grid>
      </Box>
    </Background> */}
    </section>
  );
}