import styled from "styled-components";
import {Colors} from './../../../Styled_components/colors';
import Notifications_buttons from "./Notifications_buttons/Notifications_buttons";

function Notification() {

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;  
    width: 28%;
    display: flex;
    justify-content:flex-end;
  `;

  const Notifications_icons = styled(Notifications_buttons)`
    margin-right: 10px;
  `;

  const Notify_mark = styled.div`
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: #2b56e2;
    color: ${Colors.white};
    position: absolute;
    line-height: normal;
    text-align: center;
    font-family:Tahoma;
  `;

  return (
      <Wrapper>
          <Notifications_buttons href="/">
              <img src="./icons/house.png" alt="Home page"/>
          </Notifications_buttons>

          <Notifications_icons href="/comments">
              <img src="./icons/comments.png" alt="Comments"/>
              <Notify_mark>2</Notify_mark>
          </Notifications_icons>

          <Notifications_icons href="/notifications">
              <img src="./icons/bell.png" alt="Notifications"/>
              <Notify_mark>5</Notify_mark>
          </Notifications_icons>
      </Wrapper>
  );
}

export default Notification;