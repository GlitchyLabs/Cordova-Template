import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "cordova_script";
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';

const container = document.getElementById("root");
const root = createRoot(container!);

const snackbarSettings:SnackbarProviderProps = {
  anchorOrigin: {horizontal: "center", vertical:"bottom"},
  autoHideDuration: 2800,
  hideIconVariant: false,
  children: null
  }

document.addEventListener(
  "deviceready",
  () => {
    root.render(
      <React.StrictMode>
        <div>
        <SnackbarProvider {...snackbarSettings}>
          <App />
        </SnackbarProvider>
        </div>
      </React.StrictMode>
    );
  },
  false
);
