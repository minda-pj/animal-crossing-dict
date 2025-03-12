"use client";

import React, { useRef, useState } from "react";
import Title from "./Title";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import styled from "styled-components";
import { DetailModal } from "./DetailModal";

const Main = () => {
  const [category, setCategory] = useState<TCategory>("villager");
  const searchWordRef = useRef<HTMLDivElement>(null);

  const searchItem = () => {};

  return (
    <MainContainer>
      <MainWrapper>
        <Title />
        <Navigator category={category} setCategory={setCategory} />
        <SearchBar searchWordRef={searchWordRef} searchItem={searchItem} />
        <ItemList category={category} />
        <DetailModal />
      </MainWrapper>
    </MainContainer>
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
