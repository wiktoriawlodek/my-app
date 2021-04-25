import styled from 'styled-components';
import {Colors} from '../../../../Styled_components/colors';

const Notifications_buttons = styled.a`
  img {
    width: 25px;
    height: 25px;
    margin-right: 0;
  }
  background-color:${Colors.white};
        :hover {
          background-color: #c1cbd5;
          width: 35px;
          height: 35px;
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export default Notifications_buttons;