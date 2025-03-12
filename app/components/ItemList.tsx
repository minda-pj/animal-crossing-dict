import React from "react";
import styled from "styled-components";
import Item from "./Item";

interface TItemList {
  data: any;
  category: TCategory;
}
const ItemList = ({ data, category }: TItemList) => {
  return (
    <ItemListContainer>
      {(data || [])?.map((item) => (
        <Item data={item} key={item.name + item.url} category={category} />
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
