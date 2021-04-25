import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../Styled_components/colors';

import Top_container from './Top_container/Top_container';
// import Slider from './Slider/Slider';

const Wrapper = styled.div`
    border: 2px solid ${Colors.blue};
    width: 1200px;
    height: 670px;
    margin: 15px 130px 0px 65px;
    display:flex;
    flex-direction: column;
`;

const Main_content: FC = () => {
    return ( 
        <Wrapper>       
             <Top_container/>
            {/* <Workspaces/> */ }
        </Wrapper>
    );
};

export default Main_content;