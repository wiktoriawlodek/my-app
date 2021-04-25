import {FC} from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
`;

const Navigation_icon = styled.div`
    margin-top:10px;
    img{
        width:25px;
        height:25px;
        margin-left:20px;
    }
    width:27%;
    display:flex;
    button{
    }
    span{
        width:10%;
        margin-top: 10px;
        margin-left:15px;
        font-size: 12px;
        font-family: "Tahoma";
    }
`;

const Navigator: FC = () => {
    return( 
        <Navigation>
            <Navigation_icon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <span>Publications</span>
            </Navigation_icon>

            <Navigation_icon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <span>Ecosystem</span>
            </Navigation_icon>

            <Navigation_icon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <span>Entities</span>
            </Navigation_icon>
        </Navigation>
    );
};
export default Navigator;