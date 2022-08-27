import React, { useState } from "react";
import { Button, Grid, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { playCodeBreaker } from "./services/services.ts";


const StyledTypography2 = styled(Typography)`
  padding: 0 20px;
  font-size: { xs: "11px", md: "24px" };
  width: 100%;
  text-align: { md: "center" };
  height: { xs: "100px", md: "200px" };
`;

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
  marginLeft: "10%",
  [theme.breakpoints.up("xs")]: {
    width: "80%",
    marginBottom: "10px",
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
  const [content, setContent] = useState({
    secreto: "",
    intento: "",
  });
  const [result, setResult] = useState("");

  const play = () => {
    playCodeBreaker(content).then((res) => {
      console.log(res.data.result);
      setResult(res.data.result);
    });
  };


  return (
    <>
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
          md={4}
          sx={{ display: "block" }}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          width={{ xs: "100%" }}
        >
          <Grid
            sx={{
              marginLeft: { xs: "0", md: "10%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <StyledTypography fontSize={{ xs: "14px", md: "18px" }}>
              Play Code Breaker
            </StyledTypography>
          </Grid>
        </Grid>

        <Grid
          sm={12}
          md={8}
          container
          item
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid xs={12} md={4} paddingBottom={{ xs: "10px", md: "0" }}>
            <Search>
              <StyledInputBase 
                type="password"
                onChange={(e) =>
                  setContent({ ...content, secreto: e.target.value })
                }
                placeholder="Ingresa tu secreto"
              />
            </Search>
          </Grid>
          <Grid xs={12} md={4}>
            <Search>
              <StyledInputBase
                onChange={(e) =>
                  setContent({ ...content, intento: e.target.value })
                }
                placeholder="Ingresa tu intento"
              />
            </Search>
          </Grid>
          <Grid xs={12} md={4}>
            <StyledButtonVar
              onClick={() => {
                play();
              }}
              variant="contained"
            >
              <Typography variant="body2">Intentar</Typography>
            </StyledButtonVar>
          </Grid>
        </Grid>
      </Grid>
      {result && (
        <Grid item sm={12} md={12}>
          <StyledTypography2 fontSize={{ xs: "14px", md: "32px" }} sx={{ textAlign: 'center', marginTop: '50px'}}>
            Resultado: {result} {result === 'XXXX' ? '¡Felicidades!' : 'Sigue intentando'}
          </StyledTypography2>
        </Grid>
      )}
    </>
  );
};

export default Home;
