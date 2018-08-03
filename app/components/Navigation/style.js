
import styled from 'styled-components';

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

  @media (max-width: 767px){
    display: none;
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
  -webkit-box-align: center;
  align-items: center;
  margin-right: 10px;
  ul {
    margin: 0px;
    padding: 0px;
    li {
      display: inline-block;
      
      a {
        transition: all 0.25s;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;        
        &:hover {
          color: #FDDE82;
        }
      }
    }
  }
  a {
    font-size: 14px;
    font-weight: 900;
    color: rgb(32, 43, 54);
    display: block;
    position: relative;
    padding: 0px 15px;
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
