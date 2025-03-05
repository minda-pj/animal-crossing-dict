import styled from "styled-components";

export const DetailModalWrap = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    background-color: #000;
    z-index: -1;
  }
`;

export const DetailModalContent = styled.article`
  width: 100%;
  max-width: 896px;
  padding: 1.5rem;
  border: 4px solid rgb(125, 206, 130);
  border-radius: 0.5rem;
  background-color: rgb(249, 245, 231);
`;
