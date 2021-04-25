import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../Styled_components/colors';


//
const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    background-color: #ffff;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    margin: 0px auto;
    box-shadow: 0px 3px 4px lightgray;
`;

//profilowe + name + job title
const Person = styled.div`
    width:100%;
    height:248px;
    border-radius:5px 5px 0px 0px;
    display:flex;
    justify-content:center;
    background-color:${Colors.white};
    align-items:center;
    border-bottom: 2px solid ${Colors.bcg_color};
    img{
        margin-top:5px;
        width:75px;
        height:75px;
        border-radius:50%;
    }
    flex-direction: column;
`;

const Name = styled.div`
    margin-top:10px;
    display:flex;
    font-family: Tahoma;
    font-weight: 600;
    font-size: 14px;
    color: ${Colors.blue};
`;

//jobtitle
const Job_title = styled.div`
    display:flex;
    font-family: Tahoma;
    margin-top:10px;
    font-size:12.5px;
    color:${Colors.light_gray};
`;

//networks & publications
const Yours = styled.div`
    padding: 3px 0px;
    font-family: Tahoma;
    background-color:${Colors.white};
    display:flex;
    width:100%;
    /* flex-direction: row; */
`;
//ikonki lewa
const Icon = styled.div`
 img{
        width:25px;
        height:25px;
        margin-left:20px;
    }
    width:25%;
`;

const Text = styled.div`
    width:50%;
    height:30px;
    align-items:center;
    font-size: 12px;
    display:flex;
`;

//buttonki prawa
const Button=styled.button`
    margin: auto 10px auto 0px;
    width:13%;
    height:75%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15%;
    outline:none;
    img{
        width:16px;
        height:16px;
    }
    :hover{
        cursor: pointer;
    }
`;

const Profile: FC = () => {
    return( 
            <Wrapper>      
                <Person>
                    <img src="./humberta.png" alt='humberta'/>
                    <Name>
                        <p>Humberta Swift</p>
                    </Name>
                    <Job_title>
                        <p>Job title - Company</p>
                    </Job_title>
                </Person>        
                
                <Yours> 
                    <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                    <Text>Your Network</Text>
                    <Button><img src="./icons/network.svg" alt='network'></img></Button>
                </Yours>
                <Yours>
                        <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                        <Text>Your Publications</Text>
                        <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
                </Yours>

           </Wrapper> 
    );
};
export default Profile;