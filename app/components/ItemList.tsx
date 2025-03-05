import useGetFishes from "@/query/useGetFishes";
import useGetFossils from "@/query/useGetFossils";
import useGetVillagers from "@/query/useGetVillagers";
import React from "react";
import styled from "styled-components";
import Item from "./Item";
import useGetBugs from "@/query/useGetBugs";

interface TItemList {
  category: TCategory;
}
const ItemList = ({ category }: TItemList) => {
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

  return (
    <ItemListContainer>
      {(data || [])?.map((item) => (
        <Item data={item} key={item.id + item.name} />
      ))}
    </ItemListContainer>
  );
};

const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default ItemList;
