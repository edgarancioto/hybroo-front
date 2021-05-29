import styled from "styled-components";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  width: 100vw;
  height: 80px;

  background-color: #fff;

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const MenuUser = styled.div`
	padding: 0px 20px;
  display: flex;
  flex-direction: row;

  align-items: center;

  height: 100%;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: end;
  align-items: center;

  height: 100%;
`;
export const Info = styled.div`
  text-align: center;
  align-items: center;
`;
export const Avatar = styled.div`
  margin-right: 10px;
  text-align: center;
  align-items: center;

  img {
    border-radius: 50px;
    width: 40px;
    height: 40px;
  }
`;
export const TagNotification = styled.span`
  ::before {
    content: '';
    background-color: #f78e20;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 35px;
    margin: 22px 0px 0px 22px;
  }
`;
export const NotificationIconResult = styled(NotificationsActiveOutlinedIcon)`
  color: #6c757d;
  margin: 10px;
`;

export const NotificationIcon = styled(NotificationsNoneOutlinedIcon)`
  color: #6c757d;
  margin: 10px;
`;
