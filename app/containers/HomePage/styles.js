import styled from 'styled-components';
import ticketboxBG1 from 'images/color1.png';
import ticketboxBG2 from 'images/color2.png';
import headerBG from 'images/pattern-final.png';
import speakerBG from 'images/pattern_with_overlay.png';

export const ContainerWrap = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const HeaderWrap = styled.section`

  background: url(${headerBG});
  background-repeat: no-repeat;
  background-size: cover;
  .header-content {
    background: rgba(255,255,255,.95);
    max-width: 800px;
    text-align: center;
    margin: auto;
    padding-bottom: 100px;
    padding-top: 100px;
    img {
      max-width: 320px;
      width: 100%;
      margin-bottom: 20px;
      @media (max-width: 767px) {
        max-width: 200px;
      }
    }
    h1 {
      font-size: 150px;
      margin: 0;
      line-height: 1;
      color: black;
      @media (max-width: 767px) {
        font-size: 90px;
      }
      @media (max-width: 500px) {
        font-size: 40px;
      }
    }
    h2 {
      font-size: 20px;
      font-weight: 900;
      line-height: 1;
      margin: 0;
    }
    p{
      font-size: 1.8em;
      margin: 0;
      line-height: 2;
      margin-bottom: 20px;
    }
    a {
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
export const AgendaWrap = styled.section`

h1 {
  font-weight: 900;
  font-size: 30px;
  margin: 0;
  line-height: 1;
  margin-bottom: 10px;
}
h2 {
  font-size: 1.8em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
}
p {
  font-size: 1.8em;
  color: gray;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
}
img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
a {
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
.agenda-content {
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #7FD2F0;
  padding: 30px;
  @media (max-width: 1023px) {
    padding: 50px;
  }
  @media (max-width: 767px) {
    padding: 50px 15px 50px 15px;
  }
  > div {
    width: 60%;
    @media (max-width: 1600px) {
      width: 80%;
    }
    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 1023px) {
      width:100%;
    }
  }    
}
`;

export const AttendessWrap = styled.section`
h1 {
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  margin-bottom: 50px;
}
h2 {
  font-size: 30px;
  margin: 0;
  margin-bottom: 10px;
}
p {
  font-size: 1.8em;
  margin: 0;
  color: gray;
  line-height: 1.2;
}
.attendess-text {
  text-align: center;
  padding: 30px;
  border: 1px solid #7FD2F0;
  margin: 10px;
  background: #fff;
  position: relative;
  top: -50px;
  min-height: 250px;
  a {
    text-decoration: underline;
    color: gray;
  }
}
img {
  object-fit: cover;
  width: 100%;
}   
@media (max-width: 767px) {
  h1 {
    font-size: 40px;
  }
}
`;

export const SpeakersWrap = styled.section`
margin-bottom: 50px;
h1 {
  text-align: center;
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 900;
}
h2 {
  font-size: 20px;
  margin: 0;
}
h3 {
  font-size: 1.8em;
  color: gray;
  font-weight: 400;
  margin: 0;
  line-height: 1;
}
.divider {
  width: 100%;
}
.speaker-img {
  object-fit: cover;
  width: 100%;
}
.speakers-info {
  border: 1px solid lightgray;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
  > div {
    padding: 30px;
    text-align: center;
    > div {
      p {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
.speakers-social {
  > div {
    justify-content: center;
    img {
      width: 30px;
    }
  }
}
.speakers-cont {
  margin-bottom: 50px;
  >div {
    &:last-child {
      .speakers-info {
        position: relative;
        background: url(${speakerBG});
        background-repeat: no-repeat;
        background-size: cover;
        
          h1 {
            font-size: 40px;
            margin-top: 0px;
            margin-bottom: 0px;
            width: 100%;
            height: 100%;            
            position: absolute;
            background: rgba(255,255,255,.5);
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
    
          }
        
        img {
          visibility: hidden;
        }
        >div {
          visibility: hidden;
        }
      }
    }
  }
}
@media (max-width: 767px){
  h1 {
    font-size: 40px;
  }
}
`;

export const TicketsWrap = styled.section`
margin-bottom: 50px;
> h1 {
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 50px;
}
> ul {
  margin-bottom: 50px;
  padding: 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: lightgray;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  li {
    padding: 25px;
    display: inline-block;
    list-style: none;
    margin: 0;
    font-size: 1.4em;
  }
  li.active {
    color: black;
    border-bottom: 5px solid #F56621;
  }
}
.ticket-box-container {
  .ticket-box {
    .colored {
      i {
        color: #F56621;
        font-weight: 900;
      }
    }
    .crossed-out {
      opacity: .3;
    }
    &:nth-child(1) .box-header{
      background-image: url(${ticketboxBG1});
    }
    &:nth-child(2) .box-header{
      background-image: url(${ticketboxBG2});
    }
  }
}
.box-header {
  
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  h2 {
    margin: 0px;
    text-align: center;
    font-size: 1.8em;
    color: white;
    border-bottom: 1px solid white;
    padding: 25px;
    font-weight: 700;
  }
   h1 {
    font-size: 30px;
    margin: 0px;
    text-align: center;
    padding: 30px 0px 80px;
    color: white;
    font-weight: 700;
  }
  .badge {
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      bottom: -50px;
    }
  }
}
.box-desc {
  height: auto;
  overflow: initial;
  font-size: 15px;
  line-height: 26px;
  ul {
    padding-left: 0px;
    li {
      list-style: none;
      padding: 20px 20px 20px 70px;
      font-size: 1.4em;
      line-height: 1.3;
      color: gray;
      position: relative;
      display: flex;
      align-items: center;
      @media (max-width: 767px){
        padding: 20px 20px 20px 50px;
      }
      i {
        margin-right: 20px;
      }
    }
    li:nth-child(odd) {
      background-color: #F5F4F6;
    }
  }
  .price {
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    color: #494949;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 50px;
    }
    &.hide {
      height: 80px;
      p {
        display: none;
      }
    }
  }
  .buy-button {
    text-align: center;
    padding: 50px;
    position: relative;
    p {
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      color: #F56621;
      font-weight: 700;
      font-size: 1.2em;
      margin: 0px;
    }
    button {
      max-width: 250px;
      width: 100%;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      display: inline-block;
      letter-spacing: 1px;
      cursor: pointer;
      background-color: lightgray;
      padding: 10px 15px;
      margin: 0px;
      border-radius: 0px;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      -webkit-transition: all 0.25s;
      transition: all 0.25s;
    }
  }
}
.ticket-box-container {
  justify-content: center;
  .ticket-box {    
    max-width: 500px;
    >div {
      -webkit-box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
      -ms-box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
      -moz-box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
      box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
      background: white;
      margin: 15px;
    }
  }
}
@media (max-width: 767px){
  h1 {
    font-size: 40px;
  }
}
`;

export const SponsorWrap = styled.section`
background: url(${ticketboxBG1});
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
padding: 50px;

p{
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  max-width: 700px;
  line-height: 1.3;
  margin-bottom: 0px;
}
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
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  max-width: 200px;
  width: 100%;
}
@media (max-width: 767px){
  flex-direction: column;
  text-align: center;
  p {
    margin-bottom: 20px;
    font-size: 35px;
  }
}
`;

export const SubscribeWrap = styled.section`
  text-align: center;
  padding: 50px 15px 50px 15px;
  ._form-branding {
    display: none;
  }
  ._button-wrapper {
    margin: 0px!important;
    button#_form_2_submit {
      font-family: "brandon-grotesque",sans-serif!important;
      font-size: 14px!important;
      font-weight: 700!important;
    }
  }
  form {
    margin-top: 0px!important;
    padding: 0px!important;
  }
  ._form-content {
    display: flex;
    
    @media (max-width:667px) {
      justify-content: center;
      ._form_element {
        width: initial!important;
      }
      #_form_2_submit {
        font-size: 14px;
      }
      ._button-wrapper {
        width: initial!important;        
      }
    }
    input {
      border: 1px solid lightgray;
      font-size: 14px!important;
      padding: 9px 12px!important;
      padding: 8px;
      font-weight: 400;
      width: 250px!important;
      font-family: "brandon-grotesque",sans-serif!important;
      @media (max-width: 480px) {
        width: auto!important;
      }
    }
  }
h1 {
  font-size: 30px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 900;
}
p {
  font-size: 1.8em;
  margin: 0;
  margin-bottom: 20px;
}
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
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

._error-inner {
  font-size: 16px;
}
._form-thank-you {
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #F56621;
}
`;

export const LocationWrap = styled.section`
align-items: center;
display: flex;
.with-bg {
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  img {
    object-fit: cover;
    width: 133%;
    @media (max-width: 1023px) {
      width: 100%;
    }
  }
}
.contact-form {
  padding-top: 50px;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #F1F1F1;
  form {
    @media (max-width: 1200px) {
      width: 450px!important;
    }
    @media (max-width: 767px) {
      width: 400px!important;
    }
    @media (max-width: 500px) {
      width: 300px!important;
    }
    @media (max-width: 400px) {
      width: 250px!important;
    }
    input,textarea {
      font-family:"brandon-grotesque",sans-serif;
      font-size: 16px!important;
    }
  }
  h1 {
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 900;
  }
  ._form-branding {
    display: none;
  }
  ._form_8 {
    form {
      padding: 0px!important;
      margin-top: 0px!important;
    }
  }
  input, textarea {
    border: 1px solid gray;
    width: 100%;
    border: 1px solid lightgray;
    font-size: 16px;
    padding: 15px;
    font-weight: 400;    
    margin-bottom: 10px;
    background-color: #fff;
  }
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
    width: 100%;
  }
}
.address-box {
  position: absolute;  
  > div {
    max-width: 450px;
    margin: auto;
    padding: 30px;
    background: #fff;
    z-index: 999;
    position: relative;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.05);
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: 900;
  }
  p{
    font-size: 1.8em;
  }
}
.location-cont {
  width: 100%;
}
.oline {
  height: 1px;
  background: #FDDE82;
  width: 100%;
  margin-bottom: 20px;
}
`;

export const SummaryWrap = styled.section`
margin-bottom: 50px;
img {
  width: 100%;
}

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-wrap: wrap;
  margin-bottom: 0px;
  @media (max-width: 767px){
    padding: 10px;
    align-items: flex-start;
  }
  li {    
    list-style: none;
    
    @media (max-width: 767px){
      width: 50px;
    }
    .title {
      margin-bottom: 0px;
      font-size: 40px;
      font-weight: 700;
    }
    p {
      font-size: 1.8em;
      color: black;
    }
    div {
      height: 5px;
      background: #F56621;
      width: 30px;
      margin-bottom: 10px;
    }
    @media (max-width: 767px){
      .title {
        font-size: 20px;
      }
      p {
        font-size: 1.2em;        
      }
    }
  }
}
`;
