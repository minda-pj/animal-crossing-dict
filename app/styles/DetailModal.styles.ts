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
  max-width: 56rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  border: 0.25rem solid rgb(125, 206, 130);
  border-radius: 0.5rem;
  background-color: rgb(249, 245, 231);
`;

export const DetailModalCloseButton = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  .close-icon {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

export const DetailModalTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DetailModalTitle = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  color: ${(props) => (props.color ? props.color : "rgb(125, 206, 130)")};
`;

export const DetailInfoWrap = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
`;

export const DetailInfoInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const DetailInfoImageWrap = styled.div`
  width: 192px;
  height: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.25rem solid
    ${(props) => (props.color ? `#${props.color}` : "rgb(255, 245, 99)")};
  border-radius: 62.4375rem;
  box-shadow: 0 4px 20px #2445b426;
  overflow: hidden;
  background-color: #eaeaea;

  img {
    width: 60%;
  }
`;

export const DetailInfoTextUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DetailInfoTextLi = styled.li``;

export const DetailInfoText = styled.p`
  font-size: 1.125rem;
`;

export const DetailInfoTextBold = styled.b`
  margin-right: 5px;
  font-weight: 700;
`;

export const DetailInfoCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailInfoCommentTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  color: #7dce82;
`;

export const DetailInfoCommentInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DetailInfoCommentInput = styled.input`
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid rgb(228, 228, 231);
  border-radius: 0.375rem;
  box-sizing: border-box;
  font-size: 0.875rem;

  &:focus {
    outline: 0.0938rem solid #a5a5a5;
  }
`;

export const DetailInfoCommentButton = styled.button`
  width: fit-content;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  box-sizing: border-box;
  background-color: rgb(125, 206, 130);
  color: #fff;
  cursor: pointer;
`;
