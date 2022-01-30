import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider} from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
// const fonts = {
//   font:{
//     heading: 'Open Sans',
//     body: 'Raleway',
//   }
  
// },

const theme = extendTheme({ colors, fonts: {
  heading: 'Open Sans',
  body: 'Raleway',
},})

ReactDOM.render(
<BrowserRouter>
  <Auth0Provider
      domain="dev-1q-chqox.us.auth0.com"
      clientId="XXMFMnf7qfW8RNjOODomOkFBbFpu4thw"
      redirectUri={window.location.origin}
    >
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Auth0Provider>
</BrowserRouter>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
