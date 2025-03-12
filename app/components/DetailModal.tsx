"use client";

import { useEffect, useMemo, useState } from "react";
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
import { useRouter } from "next/navigation";
import useGetVillagers from "@/query/useGetVillagers";

interface DetailModalPorps {
  category: string;
  id: string;
}

export const DetailModal = ({ category, id }: DetailModalPorps) => {
  const bugQuery = useGetBug(id);
  const fishQuery = useGetFishes(id);
  const fossilQuery = useGetFossil(id);
  const villagerQuery = useGetVillagers({ enabled: true });

  const data = useMemo(() => {
    switch (category) {
      case "bug":
        return bugQuery.data;
      case "fish":
        return fishQuery.data;
      case "fossils":
        return fossilQuery.data;
      case "villager":
        const villagerData = villagerQuery.data;

        if (villagerData) {
          const filterVillager = villagerData.data.filter(
            (villager) => villager.id === id
          );

          return filterVillager.length ? filterVillager[0] : null;
        }
      default:
        return null;
    }
  }, [category]);

  const router = useRouter();

  // 모달 닫기 이벤트
  const handleClickModalClose = () => {
    router.push("/");
  };

  return (
    <DetailModalWrap>
      <DetailModalContent>
        <DetailModalCloseButton onClick={handleClickModalClose}>
          <X className="close-icon" size={16} color="black" />
        </DetailModalCloseButton>
        <DetailModalTitleWrap>
          <Leaf size={24} color="#7dce82" />
          <DetailModalTitle>{data.name}</DetailModalTitle>
          <Leaf size={24} color="#7dce82" />
        </DetailModalTitleWrap>
        <DetailInfoWrap>
          <DetailInfoInner>
            <DetailInfoImageWrap>
              <img src={data.image_url} alt={data.name} />
            </DetailInfoImageWrap>
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
