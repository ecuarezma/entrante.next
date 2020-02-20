import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Gallery from "../components/Gallery";

const Page = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });

  let display = isLoading ? (
    <div className="isLoading">
      <p>Loading...</p>
    </div>
  ) : (
    <Gallery page={router.query.id} />
  );

  return display;
};

export default Page;
