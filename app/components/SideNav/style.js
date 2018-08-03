
import styled from 'styled-components';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

export const ReactDrawerStyle = styled(ReactDrawer)``;
export const NavWrap = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background: #fff;
  position: relative;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);

  display:none;
  @media (max-width: 767px){
      display:block;
  }
  .sidenav-cont {
      display: flex;
      justify-content: space-between;
      .material-icons[type="menu-fold"] {
        font-size: 33px;
        color: #F56621;
        cursor: pointer;
      }
  }
  .react-drawer-overlay {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.2s;
  }
  .react-drawer-drawer {
    z-index: 99999;

    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background: #fff;
    > nav {
      margin: 15px;
    }
  }
`;
export const LogoDate = styled.section`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: black;
  }
`;
export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  ul {
    margin: 0px;
    padding: 0px;
    margin-bottom: 10px;
    li {        
        display: flex;
        a {
            padding: 5px 10px;
            transition: all 0.25s;
            color: rgb(32, 43, 54);
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            &:hover {
            color: #FDDE82;
            }
        }
    }
  }
  > a {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 900;
    color: rgb(32, 43, 54);
    display: block;
    position: relative;
    padding: 0px 10px;
    button {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        letter-spacing: 1px;
        cursor: pointer;
        background: #F56621;
        padding: 10px 15px;
        margin: 0px;
        border-radius: 0px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        transition: all 0.25s;
    }
  }
`;
