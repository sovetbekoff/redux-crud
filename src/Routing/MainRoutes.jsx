import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "../components/UsersList";
import NotFound from "../components/NotFound";
import UserCreate from "../components/UserCreate";
import UserDetails from "../components/UserDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/add" element={<UserCreate />} />
      <Route path="/details/:id" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
