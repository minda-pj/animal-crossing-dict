"use client";

import useGetVillagers from "@/query/useGetVillagers";
import React from "react";

const Villagers = () => {
  const query = useGetVillagers();

  const { data } = query;

  console.log(data);
  return <div>Villagers</div>;
};

export default Villagers;
