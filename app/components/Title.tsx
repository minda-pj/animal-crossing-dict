import { Leaf } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <TitleContainer>
      <TitleLeafLeft />
      동물의 숲 백과사전
      <TitleLeafRight />
    </TitleContainer>
  );
};

const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  color: #7dce82;
  margin: 0 0 2rem;
`;
const TitleLeaf = styled(Leaf)`
  margin: 0 1rem;
`;
const TitleLeafLeft = styled(TitleLeaf)`
  @keyframes floatUp {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  animation: floatUp 3s infinite;
`;
const TitleLeafRight = styled(TitleLeaf)`
  @keyframes floatDown {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
  animation: floatDown 3s infinite;
`;

export default Title;
