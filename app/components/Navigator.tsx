import React, { Dispatch, SetStateAction } from "react";
import { Users, Fish, Bug, Bone, LucideIcon } from "lucide-react";
import styled from "styled-components";

const categories: { title: string; name: TCategory; icon: LucideIcon }[] = [
  { title: "캐릭터", name: "villager", icon: Users },
  { title: "물고기", name: "fish", icon: Fish },
  { title: "곤충", name: "bug", icon: Bug },
  { title: "화석", name: "fossil", icon: Bone },
];

interface INavigator {
  category: TCategory;
  setCategory: SetStateAction<Dispatch<TCategory>>;
}

const Navigator = ({ category, setCategory }: INavigator) => {
  return (
    <NavigatorContainer>
      {categories.map(({ name, icon: Icon, title }) => (
        <NavigatorButton key={name} onClick={() => setCategory(name)} $active={category === name}>
          <Icon />
          {title}
        </NavigatorButton>
      ))}
    </NavigatorContainer>
  );
};

const NavigatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 2rem;
`;
const NavigatorButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 2rem;
  border-radius: 2rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background: ${({ $active }) => $active && "#7dce82"};
  color: ${({ $active }) => ($active ? "white" : "#7dce82")};
  animation-duration: 200ms;
  transition-duration: 200ms;
  &:hover {
    background: ${({ $active }) => ($active ? "black" : "#7dce82")};
    color: white;
  }
`;

export default Navigator;
