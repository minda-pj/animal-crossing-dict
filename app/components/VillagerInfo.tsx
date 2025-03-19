"use client";

import useGetVillagers from "@/query/useGetVillagers";
import {
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
} from "../styles/DetailModal.styles";
import { Leaf, X } from "lucide-react";
import { InfoComment } from "./InfoComment";

interface VillagerInfoProps {
  category: string;
  id: string;
  handleClickModalClose: () => void;
}

export const VillagerInfo = ({
  category,
  id,
  handleClickModalClose,
}: VillagerInfoProps) => {
  const { data } = useGetVillagers({ enabled: true });
  const villager = data?.data.filter((villagers) => villagers.id === id)[0];

  if (data) {
    return (
      <DetailModalContent>
        <DetailModalCloseButton onClick={handleClickModalClose}>
          <X className="close-icon" size={16} color="black" />
        </DetailModalCloseButton>
        <DetailModalTitleWrap>
          <Leaf size={24} color={`#${villager.title_color}`} />
          <DetailModalTitle color={`#${villager.title_color}`}>
            {villager.name}
          </DetailModalTitle>
          <Leaf size={24} color={`#${villager.title_color}`} />
        </DetailModalTitleWrap>
        <DetailInfoWrap>
          <DetailInfoInner>
            <DetailInfoImageWrap color={villager.text_color}>
              <img src={villager?.image_url} alt={villager?.name} />
            </DetailInfoImageWrap>
            {data && (
              <DetailInfoTextUl>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Quote:</DetailInfoTextBold>
                    {villager.quote}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Species:</DetailInfoTextBold>
                    {villager.species}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Personality:</DetailInfoTextBold>
                    {villager.personality}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Gender:</DetailInfoTextBold>
                    {villager.gender}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Birthday Month:</DetailInfoTextBold>
                    {villager.birthday_month}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Birthday Day:</DetailInfoTextBold>
                    {villager.birthday_day}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Sign:</DetailInfoTextBold>
                    {villager.sign}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Phrase:</DetailInfoTextBold>
                    {villager.phrase}
                  </DetailInfoText>
                </DetailInfoTextLi>
                <DetailInfoTextLi>
                  <DetailInfoText>
                    <DetailInfoTextBold>Clothing:</DetailInfoTextBold>
                    {villager.clothing}
                  </DetailInfoText>
                </DetailInfoTextLi>
              </DetailInfoTextUl>
            )}
          </DetailInfoInner>
          <InfoComment category={category} id={id} />
        </DetailInfoWrap>
      </DetailModalContent>
    );
  }
};
