"use client";

import { useEffect, useState } from "react";
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
import useGetBug from "@/query/useGetBug";
import useGetFishes from "@/query/useGetFish";
import useGetFossil from "@/query/useGetFossil";

interface DetailModalPorps {
  category: string;
  id: string;
}

export const DetailModal = ({ category, id }: DetailModalPorps) => {
  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    fetchDetail(category, id);
  }, []);

  const fetchDetail = async (category: string, id: string) => {
    try {
      switch (category) {
        case "bug":
          return useGetBug(id);
        case "fish":
          return useGetFishes(id);
        case "fossils":
          return useGetFossil(id);
      }
    } catch (err: any) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <DetailModalWrap>
      <DetailModalContent>
        <DetailModalCloseButton>
          <X className="close-icon" size={16} color="black" />
        </DetailModalCloseButton>
        <DetailModalTitleWrap>
          <Leaf size={24} color="#7dce82" />
          <DetailModalTitle>Crucian Carp</DetailModalTitle>
          <Leaf size={24} color="#7dce82" />
        </DetailModalTitleWrap>
        <DetailInfoWrap>
          <DetailInfoInner>
            <DetailInfoImageWrap></DetailInfoImageWrap>
            <DetailInfoTextUl>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>Piace:</DetailInfoTextBold>
                  160 Bell
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>Location:</DetailInfoTextBold>River
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>Shadow Size:</DetailInfoTextBold>
                  Small
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>Appearance Time:</DetailInfoTextBold>
                  All Time
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>
                    Northern Hemisphere Appearance Month:
                  </DetailInfoTextBold>
                  January - December
                </DetailInfoText>
              </DetailInfoTextLi>
              <DetailInfoTextLi>
                <DetailInfoText>
                  <DetailInfoTextBold>
                    Southern Hemisphere Appearance Month:
                  </DetailInfoTextBold>
                  January - December
                </DetailInfoText>
              </DetailInfoTextLi>
            </DetailInfoTextUl>
          </DetailInfoInner>
          <DetailInfoCommentWrap>
            <DetailInfoCommentTitle>Comment</DetailInfoCommentTitle>
            <DetailInfoCommentInputWrap>
              <DetailInfoCommentInput placeholder="Name" />
              <DetailInfoCommentInput placeholder="Add Comment..." />
              <DetailInfoCommentButton>Add Comment</DetailInfoCommentButton>
            </DetailInfoCommentInputWrap>
          </DetailInfoCommentWrap>
        </DetailInfoWrap>
      </DetailModalContent>
    </DetailModalWrap>
  );
};
