"use client"
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Background from "@/app/components/background";
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          textAlign: "center"
        }}
      >
        <Grid sx={{ margin: 5 }}>
          <Grid container direction="column" alignItems="center">
            <Image src="/logo.svg" alt="description" width={250} height={250} />
            <Typography
              sx={{
                color: "white",
                fontSize: 40,
                marginTop: 5,
                width: "100%",
              }}
            >
              Espaço
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                color: "white",
                fontSize: 60,
                fontFamily: "Rubik"
              }}
            >
              Janayna Paraizo
            </Typography>
          </Grid>
          <Grid sx={{ width: "80vh", marginTop: 2 }}>
            <Typography 
              sx={{
                fontSize: 22,
                fontFamily: "Rubik",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              A Espaço Janayna Paraizo é um centro especializado em fisioterapia, dedicado a oferecer tratamentos personalizados para a sua saúde e qualidade de vida. Com uma abordagem moderna e humanizada, buscamos proporcionar reabilitação eficaz, alívio da dor e a recuperação plena dos nossos pacientes.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
      }}>
<Grid sx={{ marginBottom: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Image
    src="/rpgImage.jpeg"
    alt="description"
    width={300}
    height={300}
    style={{ borderRadius: "100%" }}
  />
  <Typography sx={{ fontSize: 50, color: "#2C2C2C", marginTop: 2 }}>RPG</Typography>
  <Typography sx={{
    fontSize: 22,
    color: "white",
    fontFamily: "Rubik",
    textAlign: "justify",
    textJustify: "inter-word",
    width: "110vh",
    marginTop: 2,
    marginBottom: 20
  }}>
    A Reeducação Postural Global (RPG) é um método terapêutico inovador que trata desequilíbrios posturais e dores musculoesqueléticas por meio de alongamentos e ajustes personalizados. Na Espaço Janayna Paraizo, utilizamos essa técnica para corrigir disfunções da postura, aliviar tensões e restaurar a mobilidade do corpo.
  </Typography>
</Grid>


<Grid sx={{ marginBottom: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Image 
    src="/massgem.png" 
    alt="description" 
    width={300} 
    height={300} 
    style={{ borderRadius: "100%" }} 
  />
  <Typography sx={{ fontSize: 50, color: "#2C2C2C", marginTop: 2 }}>MASSAGEM</Typography>
  <Typography sx={{
    fontSize: 22,
    color: "white",
    fontFamily: "Rubik",
    textAlign: "justify",
    textJustify: "inter-word",
    width: "110vh",
    marginTop: 2,
    marginBottom: 20
  }}>
    A massagem terapêutica é uma excelente aliada para aliviar tensões musculares, reduzir o estresse e promover o equilíbrio do corpo e da mente. Na Espaço Janayna Paraizo, oferecemos diferentes técnicas de massagem para atender às suas necessidades, proporcionando alívio da dor, melhora da circulação e sensação de bem-estar profundo.
  </Typography>
</Grid>

<Grid sx={{ marginBottom: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Image 
    src="/pilates.png" 
    alt="description" 
    width={300} 
    height={300} 
    style={{ borderRadius: "100%" }} 
  />
  <Typography sx={{ fontSize: 50, color: "#2C2C2C", marginTop: 2 }}>Pilates</Typography>
  <Typography sx={{
    fontSize: 22,
    color: "white",
    fontFamily: "Rubik",
    textAlign: "justify",
    textJustify: "inter-word",
    width: "110vh",
    marginTop: 2,
    marginBottom: 20
  }}>
    O Pilates é um método de exercícios que fortalece o corpo, melhora a postura e aumenta a flexibilidade, proporcionando mais equilíbrio e bem-estar para o dia a dia. Na Espaço Janayna Paraizo, oferecemos aulas personalizadas para todas as idades e necessidades, focando no alinhamento corporal, fortalecimento muscular e controle da respiração.
  </Typography>
</Grid>

<Grid sx={{ marginBottom: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Image 
    src="/drenagemm.jpeg" 
    alt="description" 
    width={300} 
    height={300} 
    style={{ borderRadius: "100%" }} 
  />
  <Typography sx={{ fontSize: 50, color: "#2C2C2C", marginTop: 2 }}>Drenagem</Typography>
  <Typography sx={{
    fontSize: 22,
    color: "white",
    fontFamily: "Rubik",
    textAlign: "justify",
    textJustify: "inter-word",
    width: "110vh",
    marginTop: 2,
    marginBottom: 20
  }}>
    A drenagem linfática é uma técnica de massagem suave e ritmada, que estimula o sistema linfático, promovendo a eliminação de toxinas e o combate à retenção de líquidos. Na Espaço Janayna Paraizo, oferecemos esse tratamento para ajudar na redução do inchaço, melhora da circulação e fortalecimento do sistema imunológico.
  </Typography>
</Grid>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 5, }}>
        <Grid sx={{ width: "45vh", marginBottom: 10 }}>
          <Typography sx={{ fontSize: 50, color: "#2C2C2C" }}>Nossos Horários</Typography>
        </Grid>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=santosdodia@gmail.com&ctz=America%2FSao_Paulo"
          style={{ border: "0" }}
          width="1300"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Box>
    </Background>
  );
}
