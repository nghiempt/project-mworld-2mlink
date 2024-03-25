'use client';

import React from "react";
import { Suspense } from 'react'
import { NextPage } from "next";
import HomeContainer from "@/components/container";

function HomeFallback() {
  return <>...</>
}

const HomePageServer: NextPage<any> = async () => {
  return (
    <Suspense fallback={<HomeFallback />}>
      <HomeContainer />
    </Suspense>
  );
};

export default HomePageServer;
