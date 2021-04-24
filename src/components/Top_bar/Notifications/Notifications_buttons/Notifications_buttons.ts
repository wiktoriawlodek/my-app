import styled from 'styled-components';
import {Colors} from '../../../../Styled_components/colors';

const Notifications_buttons = styled.a`
  img {
    max-width: 30px;
    height: 30px;
    margin-right: 0;
  }
  background-color:${Colors.white};
        :hover {
          background-color:${Colors.light_gray};
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export default Notifications_buttons;