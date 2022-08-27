import React, { useEffect, useState } from "react";
import { Button, Grid, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  playCodeBreaker
} from "./services/services.ts";

const StyledTypography = styled(Typography)`
  padding: 0 20px;
  color: #ffffff;
  font-size: { xs: "11px", md: "16px" };
  text-align: { md: "justify" };
  width: 100%;

`;

const Search = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor: "#FFFFFF",
  marginLeft: '10%',
  [theme.breakpoints.up("xs")]: {
    width: "80%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(3),
    width: "80%",
  },
}));

const StyledButtonVar = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#772CE8",
  "&:hover": {
    backgroundColor: "#9C65F9",
  },
  borderRadius: "20px",
  border: "1px solid #ffffff",
  margin: "10px 10px",
  padding: "9px 10px",
  width: "80%",
}));


const Home = () => {

  const [content, setContent] = useState({});
  const [result, setResult] = useState({});

  const play = (codeBreaker) => {
    playCodeBreaker(codeBreaker).then((res) => {
      console.table(res);
      setResult(res.data.data);
    });
  };


  // effect for get products by category
  // useEffect(() => {
    
  // }, [category]);

  return (
    <Grid
    container
    sx={{
      width: "100%",
      background: "#772CE8",
      padding: { xs: "20px 0", md: "40px 0" },
    }}
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={{ xs: 3, md: 2 }}
  >
    <Grid
      item
      sm={12}
      md={5}
      sx={{ display: "block" }}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      width={{ xs: "100%" }}
    >
      <Grid sx={{ marginLeft: { xs: '0', md: "10%"}, textAlign: { xs: 'center', md: 'left'} }}>
        <StyledTypography
          fontSize={{ xs: "18px", md: "26px" }}
          fontWeight={700}
        >
          SubscrÃ­bete a nuestro boletÃ­n
        </StyledTypography>
        <StyledTypography fontSize={{ xs: "14px", md: "18px" }}>
          Recibe informaciÃ³n de nuestras ofertas
        </StyledTypography>
      </Grid>
    </Grid>
    <Grid
      sm={12}
      md={7}
      container
      item
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid
        xs={12}
        md={6}
      >
        <Search>
          <StyledInputBase
            placeholder="Ingresa tu correo electrÃ³nico"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>
      <Grid xs={12} md={6}>
        <StyledButtonVar variant="contained">
          <Typography variant="body2" >
            Subscribirme
          </Typography>
        </StyledButtonVar>
      </Grid>
      <Grid display={{ xs: "none", md: "block" }} margin={1} xs={12} md={12}>
        <StyledTypography textAlign="left">
          *Al subscribirme acepto recibir email de oldwave, bajo sus politicas
          de datos
        </StyledTypography>
      </Grid>
    </Grid>
  </Grid>   
  );
};

export default Home;
