import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../Styled_components/colors';

const Wrapper = styled.div`
    margin: 2px;
    height: 300px;
    display: flex;
`;

const Photo = styled.div`
    width: 300px;
    height:300px;
    /* background-color: ${Colors.blue}; */
    background-image: linear-gradient(to bottom, #4154a7, #232c47);
    margin-right:5px;
    border-radius:3px;
`;

const Latest_publications = styled.div`
    width: 720px;
    height: 300px;
    margin-left: 5px;
    background-color: ${Colors.white};
    padding:5px;
    border-radius:3px;
    h1{
        color: #504a4a;
        font-family: "Tahoma";
    }
`;


const Top_container: FC = () => {
    return(
        <Wrapper>
            <Photo></Photo>
            <Latest_publications>
                <h1>Latest publications...</h1>
            </Latest_publications>


        </Wrapper>
    )
};

export default Top_container;