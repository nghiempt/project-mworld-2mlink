"use client";

import React from "react";
import { NextPage } from "next";
import AdminPage from "./admin";

const AdminContainer: NextPage<any> = async () => {
  return (
    <AdminPage />
  );
};

export default AdminContainer;
