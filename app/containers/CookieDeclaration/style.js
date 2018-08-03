
import styled from 'styled-components';
import patterBG from 'images/pattern-final.png';

export const Wrapper = styled.section`
font-size: 18px;
.dec-nav {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: relative;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    img {
        width: 30px;
        margin-right: 10px;
    }
    a {
        transition: all 0.25s;
        font-size: 14px;
        font-weight: 700;
        color: black;
        padding: 0px 15px;
        &.logo {
            padding-left: 0px;
        }
        &:hover {
            color: #FDDE82;
        }
    }
}
.dec-header {
    background: url(${patterBG});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    >div {
        background: rgba(255,255,255, .95);
        padding: 70px;
        h1 {
            font-size: 40px;
            font-weight: 900;
            margin-bottom: 0px;
        }
    }
    
}
#cookiedec {
    margin-top: 50px;
    margin-bottom: 50px;
}
`;

export const WrapperContainer = styled.section`
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
`;
