import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../Styled_components/colors';
import Dropdown_menu from './Dropdown_menu/Dropdown_menu';
import Search_input from './Search_input/Search_input';



//div głowny, na komponenty 

const Wrapper = styled.div`
    background-color: ${Colors.white};
    width: 100%;
    height: 50px;
    display:flex;
`;


const Logo = styled.div`
    img{    
        width: 40px;
        height: 40px;
        margin: auto 5px ;
    }
    display: flex;
    /* #example{

    } */
`;

const Top_bar: FC = () => {
    return (
        <Wrapper>
            <Logo>
                <img src = './icons/logo.png' alt="logo" />
                {/* <p id="example"></p> */}
            </Logo>
            <Dropdown_menu/>
            <Search_input/>
        </Wrapper>
     )
}

export default Top_bar;