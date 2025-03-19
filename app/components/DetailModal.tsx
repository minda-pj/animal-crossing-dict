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
import { VillagerInfo } from "./VillagerInfo";

interface DetailModalPorps {
  category: string;
  id: string;
}

export const DetailModal = ({ category, id }: DetailModalPorps) => {
  const router = useRouter();

  // 모달 닫기 이벤트
  const handleClickModalClose = () => {
    router.push("/");
  };

  return (
    <DetailModalWrap>
      <VillagerInfo
        category={category}
        id={id}
        handleClickModalClose={handleClickModalClose}
      />
    </DetailModalWrap>
  );
};
