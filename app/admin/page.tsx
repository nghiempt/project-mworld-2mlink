'use client';

import React from "react";
import { Suspense } from 'react'
import { NextPage } from "next";
import AdminContainer from "@/components/admin_container";

function AdminFallback() {
  return <>...</>
}

const AdminPageServer: NextPage<any> = async () => {
  return (
    <Suspense fallback={<AdminFallback />}>
      <AdminContainer />
    </Suspense>
  );
};

export default AdminPageServer;
