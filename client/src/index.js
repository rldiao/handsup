import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { history } from "./helper/history";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./index.css";
import App from "./App";
import store from "./store";
import Footer from "./components/navigation/Footer";

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#41521f",
      light: "#f4f7e5",
      contrastText: "white"
    },
    secondary: { main: "#8c3131" }
  },
  typography: {
    useNextVariants: true
  }
});

const withFooter = WrappedComponent => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];

const Wrapper = () => (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

const WrapperWithFooter = withFooter(Wrapper);

ReactDOM.render(<WrapperWithFooter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
