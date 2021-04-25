import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../Styled_components/colors';
import Left_menu from '../Left_menu/Left_menu';
import Main_content from '../Main_content/Main_content';
import Top_bar from '../Top_bar/Top_bar';

//div głowny, na komponenty 

const Wrapper = styled.div`
    height: 750px;
    background-color: ${Colors.bcg_color};
`;
const Content = styled.div`
    width: 98%;
    height: 700px;
    /* border: 2px solid lightgray; */
    margin: 0px auto;
    display:flex;
`;


//
const Main_page: FC = () => {
    return (
        <Wrapper>
            <Top_bar/>
            <Content>
                <Left_menu/>
                <Main_content/>
            </Content>
        </Wrapper>
     )
};

export default Main_page;