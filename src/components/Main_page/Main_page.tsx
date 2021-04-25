import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../Styled_components/colors';
import Top_bar from '../Top_bar/Top_bar';

//div głowny, na komponenty 

const Wrapper = styled.div`
    height: 885px;
    background-color: ${Colors.bcg_color};
`;


//
const Main_page: FC = () => {
    return (
        <Wrapper>
            <Top_bar/>
        </Wrapper>
     )
}
export default Main_page;