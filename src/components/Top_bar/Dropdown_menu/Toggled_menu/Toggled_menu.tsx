import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../../Styled_components/colors';

const Wrapper = styled.div`
    width:280px;
    height:400px;
    background-color:${Colors.white};
    border: 1px solid #e9e9e9;
    border-radius: 0px 0px 2px 2px;
    box-shadow: 0px 2px 2px #bdbdbd;
`;

const Toggled_menu: FC = () => {
	return (
            <Wrapper>

            </Wrapper>
	)
};

export default Toggled_menu;