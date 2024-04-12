import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBarComponent } from "./AppBar/AppBar";

export const Layout: React.FC = () => {
  return (
    <div>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
