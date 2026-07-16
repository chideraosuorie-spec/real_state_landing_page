import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HouseIcon from "@mui/icons-material/House";

function Footer() {
  return (
    <Container>
      <FirstContent>
        <Div>
          <h3 className="h3">READY TO FIND YOUR DREAM PROPERTY?</h3>
          <h3 className="h33">Let's Chat on Whatsapp</h3>
          <p className="p">
            Send me a message and let's find a property for you
          </p>
        </Div>
        <Button>
          <button>
            <WhatsAppIcon />
            Chat on WhatsApp Now
          </button>
        </Button>
      </FirstContent>
      <hr className="hr" />
      <SecondContent>
        <Wrapper1>
          <Logo>
            <HouseIcon />
            <Property>
              <h3>Property </h3>
              <h3 className="h3">Expert</h3>
            </Property>
          </Logo>
          <p>Helping You Find The Property With Trust And Transparency.</p>
        </Wrapper1>
        <Wrapper2>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Properties</p>
          <p>Contact</p>
        </Wrapper2>
        <Wrapper3>
          <h3>Services</h3>
          <p>Buy Prooperty</p>
          <p>Sell Property</p>
          <p>Rent Property</p>
          <p>Property Consultation</p>
        </Wrapper3>
        <Wrapper4>
          <h3>Contact</h3>
          <p>+234 7025948545</p>
          <p>propertyexpert@gmail.com</p>
          <p>Lagos Nigeria</p>
        </Wrapper4>
      </SecondContent>
    </Container>
  );
}

export default Footer;
const Wrapper4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;
  // border: 2px solid red;
  width: 100%;
  max-width: 320px;
  font-size: 17px;
  h3 {
    color: #ffffffa6;
    font-weight: 700;
  }
  p {
    color: #ffffffa6;
    font-weight: 200;
    font-size: 17px;
    @media (min-width: 468px) and (max-width: 768px) {
      font-size: 18px;
    }
  }
  @media (max-width: 468px) {
    // align-items: start;
    width: 140px;
    font-size: 19px;
    display: none;
  }
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 100%;
  max-width: 320px;
  align-items: center;
  // border: 2px solid red;
  font-size: 20px;
  gap: 5px;
  h3 {
    color: #ffffffa6;
    font-weight: 700;
    font-size: 15px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    color: #ffffffa6;
    font-weight: 200;
    font-size: 17px;
    @media (min-width: 468px) and (max-width: 768px) {
      font-size: 17px;
    }
  }
  @media (max-width: 468px) {
    // align-items: start;
    font-size: 15px;
    display: none;
  }
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
  margin-top: 25px;
  width: 100%;
  max-width: 320px;
  font-size: 20px;
  gap: 10px;
  p {
    color: #ffffffa6;
    font-weight: 200;
    font-size: 20px;
    @media (min-width: 468px) and (max-width: 768px) {
      font-size: 18px;
      // max-width: 300px;
    }
  }
  @media (max-width: 468px) {
    // align-items: start;
    font-size: 15px;
    display: none;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  // border: 2px solid red;
  width: 100%;
  max-width: 320px;
  align-items: center;
  font-size: 20px;
  h3 {
    color: #ffffffb6;
    font-weight: 700;
  }
  p {
    color: #ffffffa6;
    font-weight: 200;
    @media (min-width: 468px) and (max-width: 768px) {
      font-size: 18px;
    }
  }
  @media (max-width: 468px) {
    // align-items: start;
    width: 120px;
    font-size: 19px;
    display: none;
  }
`;
const Logo = styled.div`
  // border: 2px solid red;
  max-width: 200px;
  width: 100%;
  padding-left: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  svg {
    color: #d49e17a9;
    font-size: 52px;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Property = styled.div`
  width: 100px;
  font-weight: 600;
  // border: 2px solid red;
  h3 {
    color: #ffffffbb;
    line-height: 100%;
    letter-spacing: 1px;
    font-size: 15px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    // @media (max-width: 460px) {
    //   font-size: 12px;
    // }
  }
  .h3 {
    color: #d49e17a9;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 50px;
  // margin-left: 5px;
  // border: 2px solid red;

  @media (max-width: 768px) {
    width: auto;
  }

  button {
    background: linear-gradient(135deg, #d49e17, #b8860b);
    color: #fff;
    height: 90%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.35s ease;
  }

  button:hover {
    background: linear-gradient(135deg, #e7b93d, #d49e17);
    transform: translateY(3px);
    box-shadow: 0 6px 20px rgba(212, 158, 23, 0.25);
  }

  button:active {
    transform: translateY(-1px);
  }
`;
const Container = styled.div`
  position: relative;
  // background: #000000;
  height: auto;
  width: 100%;
  // border: 2px solid red;
  box-sizing: border-box;
  display: flex;
  //   align-items: flex-start;
  flex-direction: column;
  //   justify-content: space-between;
  background: url("/images/unsplashFooterBg.jpg") center/cover no-repeat;
  .hr {
    color: #ffffff;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.89),
      rgba(0, 0, 0, 0.79),
      rgba(0, 0, 0, 0.74)
    );
  }

  > * {
    position: relative;
    // z-index: 1;
  }
`;
const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-end;
  flex-wrap: wrap;
  padding: 20px;
  // border: 2px solid green;
  background-color: #05031f50;
  width: fit-content;
  margin: 30px 40px 0 auto;
  box-shadow: 0 12px 7px 17px #05031f46;
  // right: 15px;
  @media (max-width: 768px) {
    margin: 20px;
    width: auto;
    max-width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // border: 2px solid green;
  max-width: 100%;
  padding: 20px 0px;

  .h3 {
    font-size: 15px;
    color: #d49e17e3;
    line-height: 100%;
    font-weight: 600;
    padding: 5px 0px;
    // border: 2px solid green;
    display: inline-block;
  }

  .h33 {
    font-size: 22px;
    color: #ffffffea;
    padding: 5px 0px;
    line-height: 100%;
    width: auto;
    font-weight: 600;
    // border: 2px solid green;
    display: inline-block;
  }

  .p {
    font-size: 14px;
    color: #ffffffea;
    padding: 5px 0px;
    line-height: 100%;
    font-weight: 600;
    width: auto;
    display: inline-block;
    // border: 2px solid green;
  }
`;

const SecondContent = styled.div`
  background-color: #05031f50;
  // border: 2px solid black;
  padding: 30px 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  // justify-items: center;
  // width: 100vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    // grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
    padding: 0;
  }
`;
