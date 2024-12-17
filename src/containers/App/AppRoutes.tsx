import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import URLS from "constants/urls";
import MainPage from "containers/MainPage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={URLS.HOME}
        element={<MainPage />}
      />
      <Route path="*" element={<Navigate to={URLS.HOME} replace />} />
    </Routes>
  );
}

export default AppRoutes;
