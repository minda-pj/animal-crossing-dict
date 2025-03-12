"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { DetailModal } from "./DetailModal";
import useGetFishes from "@/query/useGetFishes";
import useGetFossils from "@/query/useGetFossils";
import useGetBugs from "@/query/useGetBugs";
import useGetVillagers from "@/query/useGetVillagers";

const Main = () => {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<TCategory>("villager");
  const [searchData, setSearchData] = useState(null);
  const searchWordRef = useRef<HTMLDivElement>(null);

  const { data: fishesData } = useGetFishes({ enabled: category === "fish" });
  const { data: fossilsData } = useGetFossils({ enabled: category === "fossil" });
  const { data: bugsData } = useGetBugs({ enabled: category === "bug" });
  const { data: villagersData } = useGetVillagers({ enabled: category === "villager" });

  let fossil = [];
  const bugs = bugsData?.data || [];
  const fishes = fishesData?.data || [];
  fossilsData?.data.forEach((f) => {
    fossil.push(...f.fossils);
  });
  const villagers = villagersData?.data || [];

  let data;
  switch (category) {
    case "villager":
      data = villagers;
      break;
    case "fish":
      data = fishes;
      break;
    case "fossil":
      data = fossil;
      break;
    case "bug":
      data = bugs;
      break;
    default:
      return null;
  }

  useEffect(() => {
    setSearchData(null);
  }, [category]);

  const mCategory = searchParams.get("category");
  const mId = searchParams.get("id");

  const searchItem = () => {
    const searched = data.filter((item) => item.name.toLowerCase().indexOf(searchWordRef.current.value) !== -1);
    setSearchData(searched);
  };

  return (
    <>
      {mCategory && mId && <DetailModal category={mCategory} id={mId} />}

      <MainContainer>
        <MainWrapper>
          <Title />
          <Navigator category={category} setCategory={setCategory} />
          <SearchBar searchWordRef={searchWordRef} searchItem={searchItem} />
          <ItemList data={searchData || data} category={category} />
        </MainWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  margin: 0 auto;
  padding: 4rem;
`;

const MainWrapper = styled.div`
  background: white;
  box-shadow: 0 4px 20px #2445b426;
  padding: 2rem;
  margin: 0 2rem;
  border-radius: 2rem;
`;

export default Main;
