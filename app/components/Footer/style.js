import styled from 'styled-components';

export const Wrapper = styled.footer`
padding: 20px;

> div {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
}
.ftop {
    border-bottom: 2px solid #F56621;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    > div {
        &:first-child {
            font-weight: 700;
            color: black;
            font-size: 14px;
            img {
                margin-right: 10px;
                width: 30px;
            }
            
        }
        &:last-child { 
            display: flex;
            align-items: center;
            .socials {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p {
                color: black;
                font-size: 14px;
                margin: 0px 20px;
                
            }
            a {
                margin-right: 5px;
                img {
                    width: 25px;
                }
                svg {
                    width: 25px;
                    path {
                        fill: black;
                    }
                }                
            }
            
        }
    }
}
.fbot {
    align-items: center;
    margin-top: 20px;
    > div {
        &:first-child {
            a {
                text-decoration: none;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            a,p {
                color: black;
                font-size: 14px;
            }
            strong {
                font-weight: 700;
            }
        }
    }
    > div {
        &:last-child {
            p {
                font-size: 14px;
                
            }
        }
    }
    
}
`;
