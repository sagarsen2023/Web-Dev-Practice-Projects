"use client";
import Image from "next/image";
import React, { unstable_ViewTransition as ViewTransition } from "react";
import vercelImage from "../../../public/vercel.svg";

function Page() {
  return (
    <div>
      <h1>Deploy Your App</h1>
      <ViewTransition name="vercelImage">
        <Image
          src={vercelImage}
          alt="Vercel logomark"
          width={100}
          height={100}
        />
      </ViewTransition>
    </div>
  );
}

export default Page;
