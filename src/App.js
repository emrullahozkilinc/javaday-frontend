import SubmissionForm1 from "./page/submission-forms/SubmissionForm1";
import SubmissionForm2 from "./page/submission-forms/SubmissionForm2";
import SubmissionForm3 from "./page/submission-forms/SubmissionForm3";
import SubmissionForm4 from "./page/submission-forms/SubmissionForm4";
import MuiStepper from "./components/MuiStepper";
import {FORM_STEP_TITLES} from "./constants/FormStepTitles";
import "./App.css"
import { createTheme, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MuiMiniCard from "./components/MuiMiniCard";

  const font =  "'Fira Sans', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: font,
      button: {
        textTransform: "none"
      }
    }
  });
  const cardContents = [
    ["Ne zaman:" , "6 Mayıs 2023, Cumartesi"],
    ["Nerede:" , "Elite World Asia, Istanbul"],
    ["Konferans Saatleri:" ,"09: 00 - 18:00"],
    ["Email:" , "contact@javaday.istanbul"],
    ["Konferans Ücreti:" , "2.499₺ + %18 Vat"]
  ];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="container" >
          <form style={{padding:100}}>
            <Grid2 rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid2 xs={10}>
                <Typography className="text-center" variant={"h3"} paragraph>Java Day Istanbul Registration Form</Typography>
              </Grid2>
            </Grid2>

            <br/>
            <br/>

            <Typography variant={"body1"} paragraph>
              Java Day Istanbul, İstanbul Java Kullanıcı Grubu tarafından desteklenen Türkiye'deki en
              etkili uluslararası topluluk odaklı yazılım konferanslarından biridir. Konferans 2015 yılından bu
              yana her yıl İstanbul'da gerçekleşmektedir.
            </Typography>

            <br/>
            <MuiMiniCard cardContents={cardContents}/>
            <br/>
            <br/>
            <br/>

            <MuiStepper stepTitles={FORM_STEP_TITLES}>
              <SubmissionForm1/>
              <SubmissionForm2/>
              <SubmissionForm3/>
              <SubmissionForm4/>
            </MuiStepper>
          </form>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
