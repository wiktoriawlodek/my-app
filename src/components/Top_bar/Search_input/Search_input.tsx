import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from "styled-components";
import {Colors} from '../../../Styled_components/colors';

const Wrapper = styled.fieldset`
  /* position: relative; */
  width: 35%;
  height: 30px;
  margin: auto;
  display: flex;
  border: 1px solid ${Colors.light_gray};
  border-radius: 5px;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 28px;
  /* border: 2px solid ${Colors.light_gray}; */
  /* border-radius: 5px; */
  border:none;
  text-align: center;
  font-family: Tahoma;
`;

const SearchIcon = styled.button`
  background: url('./icons/search.svg') no-repeat;
  width: 30px;
  height:30px;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border:none;
  :hover {
    cursor: pointer;
  }  
`;

const Search_input: FC = () => {
    return (
        <>
            <Wrapper>
                <Input placeholder='Search Legalcluster...' />
                <SearchIcon />
            </Wrapper>
        </>
    );
};

export default Search_input;
