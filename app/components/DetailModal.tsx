"use client";

import {
  DetailInfoCommentButton,
  DetailInfoCommentInput,
  DetailInfoCommentInputWrap,
  DetailInfoCommentTitle,
  DetailInfoCommentWrap,
  DetailInfoImageWrap,
  DetailInfoInner,
  DetailInfoText,
  DetailInfoTextBold,
  DetailInfoTextLi,
  DetailInfoTextUl,
  DetailInfoWrap,
  DetailModalCloseButton,
  DetailModalContent,
  DetailModalTitle,
  DetailModalTitleWrap,
  DetailModalWrap,
} from "../styles/DetailModal.styles";
import { X, Leaf } from "lucide-react";

export const DetailModal = () => {
  return (
    <DetailModalWrap>
      <DetailModalContent>
        <DetailModalCloseButton>
          <X className="close-icon" size={16} color="black" />
        </DetailModalCloseButton>
        <DetailModalTitleWrap>
          <Leaf size={24} color="#7dce82" />
          <DetailModalTitle>붕어</DetailModalTitle>
          <Leaf size={24} color="#7dce82" />
        </DetailModalTitleWrap>
        <DetailInfoWrap>
          <DetailInfoInner>
            <DetailInfoImageWrap></DetailInfoImageWrap>
            <DetailInfoTextUl>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>가격:</DetailInfoTextBold>
                  160 벨
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>위치:</DetailInfoTextBold>강
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>그림자 크기:</DetailInfoTextBold>
                  작음
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>출현 시간:</DetailInfoTextBold>
                  항상
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>북반구 출현 월:</DetailInfoTextBold>
                  1월-12월
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>남반구 출현 월:</DetailInfoTextBold>
                  1월-12월
                </DetailInfoText>
              </DetailInfoTextLi>
            </DetailInfoTextUl>
          </DetailInfoInner>
          <DetailInfoCommentWrap>
            <DetailInfoCommentTitle>댓글</DetailInfoCommentTitle>
            <DetailInfoCommentInputWrap>
              <DetailInfoCommentInput placeholder="이름" />
              <DetailInfoCommentInput placeholder="댓글 작성..." />
              <DetailInfoCommentButton>댓글 작성</DetailInfoCommentButton>
            </DetailInfoCommentInputWrap>
          </DetailInfoCommentWrap>
        </DetailInfoWrap>
      </DetailModalContent>
    </DetailModalWrap>
  );
};
