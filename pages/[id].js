import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Splash from "../components/Splash";

const Page = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });
  console.log(isLoading);
  return isLoading ? <p>Loading...</p> : <Splash />;
};

export default Page;
