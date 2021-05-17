import {ChangeEvent, FC, useState} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../../Styled_components/colors';

const Wrapper = styled.div`
    width:250px;
    height:500px;
    background-color:${Colors.white};
    border: 1px solid #e9e9e9;
    border-radius: 0px 0px 2px 2px;
    box-shadow: 0px 2px 2px #bdbdbd;
    display:flex;
    flex-direction:column;
`;

const Menu_filter = styled.input`
    border: 1px solid lightgray;
    margin: 3px 10px;
    height: 25px;
`;

const Menu_item = styled.div`
    background-color: skyblue;
    width:90%;
    height: 27px;
    padding: 3px 10px;
    a{
        text-decoration:none;
        color:black;
    }
`;

const Toggled_menu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

	return (
            <Wrapper>
                <Menu_filter type="text" value={inputText} onChange={inputHandler}/>
                <Menu_item>Platform</Menu_item>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src="./icons/house2.png"/><a href="home">Home</a></Menu_item>
                }
                {
                    'Publications'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src='./icons/publications.png'/><a href="publications">Publications</a></Menu_item>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/people.png"/><a href="people">People</a></Menu_item>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/entities.png"/><a href="entities">Entities</a></Menu_item>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/administration.png"/><a href="administration">Administration</a></Menu_item>
                }
                <Menu_item>Workspaces</Menu_item>

                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/comments.png"/><a href="client_contract">Client contract</a></Menu_item>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/comments.png"/><a href="supplier_contract">Supplier contract</a></Menu_item>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/entities.png"/><a href="corporate">Corporate</a></Menu_item>
                }
                {
                    'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/administration.png"/><a href="group_norms">Group Norms</a></Menu_item>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <Menu_item><img src ="./icons/comments.png"/><a href="real_estate_contracts">Real estate contracts</a></Menu_item>
                }
            </Wrapper>
	)
};

export default Toggled_menu;