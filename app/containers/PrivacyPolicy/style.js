
import styled from 'styled-components';
import patterBG from 'images/pattern-final.png';

export const Wrapper = styled.section`
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
.container {
    max-width: 1200px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
}
`;
