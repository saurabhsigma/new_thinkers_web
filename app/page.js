import React from "react";
import Dashboard from "./dashboard/page";
import Link from "next/link";

const page = () =>{
  return (
    <Link href="/dashboard">
       Go to Dashboard
      </Link>
  )

}

export default page;