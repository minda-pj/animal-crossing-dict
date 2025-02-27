import React, { useState } from "react";
import Title from "./Title";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";

type TCategory = "total" | "character" | "fish" | "bug" | "furniture" | "fossil";

const Main = () => {
  const [category, setCategory] = useState<TCategory>("total");

  return (
    <div>
      <Title />
      <Navigator />
      <SearchBar />
      <ItemList />
    </div>
  );
};

export default Main;
