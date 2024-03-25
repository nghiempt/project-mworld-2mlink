'use client';

import React from "react";
import { Suspense } from 'react'
import { NextPage } from "next";
import HomeContainer from "@/components/container";
import Head from "next/head";

function HomeFallback() {
  return <>...</>
}

const HomePageServer: NextPage<any> = async () => {
  return (
    <Suspense fallback={<HomeFallback />}>
      <Head>
        <title>First Post</title>
        <script src="https://www.vipads.live/vn/c-1679-25.js" />
      </Head>
      <HomeContainer />
    </Suspense>
  );
};

export default HomePageServer;
