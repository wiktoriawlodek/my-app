import {FC} from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import Navigator from './Navigation/Navigation';



const Wrapper = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius:5px;
    z-index: 1;
    margin-top: 15px;
    margin-left:20px;
`;

 const Left_menu: FC = () => {
    return(
        <Wrapper>
            <Profile/>
            <Navigator/>
        </Wrapper>
    )
 };

 export default Left_menu;
