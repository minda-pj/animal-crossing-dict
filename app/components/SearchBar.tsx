import { Search } from "lucide-react";
import styled from "styled-components";

interface ISearchBar {
  searchWordRef: HTMLDivElement;
  searchItem: () => void;
}

const SearchBar = ({ searchWordRef, searchItem }: ISearchBar) => {
  return (
    <SearchBarContainer>
      <SearchBarInput ref={searchWordRef} placeholder="캐릭터, 물고기, 가구, 곤충, 화석을 검색하세요." />
      <SearchBarButton onClick={searchItem}>
        <Search />
        검색
      </SearchBarButton>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  background: #81d7e233;
  margin: 0 0 2rem;
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
`;
const SearchBarInput = styled.input`
  border: 2px solid #7dce82;
  background: white;
  border-radius: 2rem;
  padding: 12px 24px;
  height: 40px;
  flex: 1;
  &:focus {
    border-color: grey;
    outline: none;
  }
`;
const SearchBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 12px 32px;
  color: white;
  margin-left: 1rem;
  height: 40px;
  background: #7dce82;
  border-radius: 2rem;
`;

export default SearchBar;
