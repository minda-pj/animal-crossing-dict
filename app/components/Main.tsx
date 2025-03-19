"use client";

import React, { RefObject, useRef, useState } from "react";
import Title from "./Title";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { DetailModal } from "./DetailModal";

const Main = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<TCategory>("villager");
  const ref = useRef<RefObject<HTMLDivElement> | null>(null);

  const mCategory = searchParams.get("category");
  const mId = searchParams.get("id");

  const searchItem = () => {};

  return (
    <>
      {mCategory && mId && <DetailModal category={mCategory} id={mId} />}

      <MainContainer>
        <MainWrapper>
          <Title />
          <Navigator category={category} setCategory={setCategory} />
          <SearchBar ref={ref} searchItem={searchItem} />
          <ItemList category={category} />
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
