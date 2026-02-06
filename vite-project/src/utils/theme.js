import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6E39CB",
      dark: "#5A2FB0",
      shade:'#A877FD',
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#89868D",
      default : '#ffff'
    },
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
      input: "#F4F5F9",
      hover : "#F9F9F9",
      sidebar :"#DECCFE",
    },
    divider: "#DBDCDE",
    status : '#2DCCFF',
    danger : '#F93131',
    darkblue : '#533FE4' ,
    dark : '#3A3541',
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: "Lato, sans-serif",
    h4: {
      fontSize: "28.83px",
      fontWeight: 700,
      lineHeight: "100%",
    },
    body2: {
      fontSize: "12.64px",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      width : 330,
    },
  },
});

export default theme;
