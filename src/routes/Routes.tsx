import React from "react";
import RoutesWithLayout from "./RoutesWithLayout";

import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme/theme";
import { Home } from "../views";

function Routes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <RoutesWithLayout path={"/"} component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default Routes;
