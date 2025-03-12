import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface TItem {
  data: any;
  category: TCategory;
}
const Item = ({ data, category }: TItem) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`?category=${category}&id=${data.id}`);
  };

  return (
    <ItemContainer onClick={handleClick}>
      <ItemName>{data.name}</ItemName>
      <ItemBody>
        <ItemImageWrapper>
          <ItemImage src={data.image_url} width={120} height={120} alt={"image"} />
        </ItemImageWrapper>
      </ItemBody>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  border-radius: 2rem;
  background: #7dce82;
  height: 100%;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const ItemName = styled.h3`
  color: white;
  font-size: 24px;
  height: 4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ItemBody = styled.div`
  height: 18rem;
  padding: 1.5rem;
  background: white;
  border: 4px solid #7dce82;
  border-radius: 0 0 2rem 2rem;
`;
const ItemImageWrapper = styled.div`
  border-radius: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemImage = styled(Image)``;

export default Item;
