// import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import styled from "styled-components";
import Header from "./Header";
function Hero() {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <FirtstContent>
          <div>
            <h3 className="h3"> Find Your Perfect Space</h3>
          </div>
          <div>
            <h2 className="find">Buy.Sell.Rent.</h2>
            <h2 className="will">I Will Handle It.</h2>
          </div>
          <div className="real">
            <p>
              Personalized real estate solutions to help You find the perfect
              property- Stress Free.
            </p>
          </div>
          <ButtonWrapper>
            <FirstButton>
              <button>
                <WhatsAppIcon />
                Chat on WhatsApp
              </button>
            </FirstButton>
            <SEcondButton>
              <button>View Properties</button>
            </SEcondButton>
          </ButtonWrapper>
        </FirtstContent>
        <SecondContent>
          <Span className="span1">
            <HandShake>
              <HandshakeIcon />
            </HandShake>
            <div>
              <h4>Trusted Advice</h4>
              <h5 className="h5">Honest and Transparent</h5>
            </div>
          </Span>
          <Span2 className="span2">
            <Local>
              <LocalOfferIcon />
            </Local>
            <div>
              <h4>Best Deals</h4>
              <h5 className="h5">Top Market Prices</h5>
            </div>
          </Span2>
          <Span3 className="span3">
            <Support>
              <SupportAgentIcon />
            </Support>
            <div>
              <h4>Full Support</h4>
              <h5 className="h5">From start to Finish</h5>
            </div>
          </Span3>
        </SecondContent>
      </ContentWrapper>
    </Container>
  );
}

export default Hero;
const HandShake = styled(HandshakeIcon)`
  color: #d49e17c7;
  // border: 2px solid green;
`;
const Local = styled(LocalOfferIcon)`
  color: #d49e17c7;
  // border: 2px solid green;
`;
const Support = styled(SupportAgentIcon)`
  color: #d49e17c7;
  // border: 2px solid green;
`;
const Span = styled.span`
  // border: 2px solid red;
  display: flex;
  //   flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;

  h4 {
    color: #ffffff;
    font-size: 14px;
    line-height: 100%;
    // border: 2px solid green;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .h5 {
    color: #ffffffd2;
    font-size: 12px;
    line-height: 100%;
    font-weight: 300;
    // border: 2px solid green;

    @media (max-width: 768px) {
      font-size: 10px;
    }
    @media (max-width: 420px) {
      font-size: 9px;
    }
  }
`;
const Span2 = styled.span`
  // border: 2px solid red;
  display: flex;
  //   flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;

  h4 {
    color: #ffffff;
    font-size: 14px;
    // border: 2px solid green;
    line-height: 100%;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .h5 {
    color: #ffffffd2;
    font-size: 12px;
    line-height: 100%;
    // border: 2px solid green;
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: 10px;
    }
    @media (max-width: 420px) {
      font-size: 9px;
    }
  }
`;
const Span3 = styled.span`
  // border: 2px solid red;
  display: flex;
  //   flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;

  h4 {
    color: #ffffff;
    font-size: 14px;
    line-height: 100%;
    // border: 2px solid green;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .h5 {
    color: #ffffffd2;
    font-size: 12px;
    line-height: 100%;
    font-weight: 300;
    // border: 2px solid green;
    @media (max-width: 768px) {
      font-size: 10px;
    }
    @media (max-width: 420px) {
      font-size: 9px;
    }
  }
`;
const Container = styled.div`
  position: relative;
  height: 100vh;
  // background: #000000;
  width: 100%;
  // border: 2px solid red;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background: url("/images/bgImg.jpg") center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.15)
    );
  }

  > * {
    position: relative;
    // z-index: 1;
  }
`;
const ContentWrapper = styled.div`
  // border: 2px solid red;
  padding: 0px 0px 20px 20px;
  height: 80vh;
  width: 100%;
  min-width: 50vw;

  .h3 {
    font-weight: 600px;
    font-size: 24px;
    font-family: "Poppins", serif;
    padding: 35px 26px 10px;
    line-height: 100%;
    color: #d49e17c7;
    text-transform: uppercase;
    // border: 2px solid green;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .find {
    font-weight: 700px;
    font-size: 32px;
    font-family: "Poppins", serif;
    padding: 0px 26px 10px;
    color: #ffffffb2;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .will {
    font-weight: 700px;
    font-size: 32px;
    font-family: "Poppins", serif;
    padding: 0px 26px 10px;
    color: #d49e17c7;
    // border: 2px solid green;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .real {
    font-weight: 700px;
    font-size: 18px;
    font-family: "Poppins", serif;
    padding: 0px 26px 10px;
    width: auto;
    color: #ffffffb2;
    // border: 2px solid green;

    @media (min-width: 540px) {
      width: 430px;
      font-size: 15px;
    }
  }
`;
const FirtstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // border: 2px solid red;
  height: auto;
  width: 100%;
`;
const SecondContent = styled.div`
  // border: 2px solid red;
  width: 450px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: auto;
    padding-top: 20px;
  }
`;
const ButtonWrapper = styled.div`
  // border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  left: auto;
  gap: 5px;
  width: 500px;
  height: auto;
  margin: 26px;

  @media (max-width: 768px) {
    display: block;
    font-weight: 700;
    width: 60%;
  }
`;
const FirstButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-left: 5px;
  // border: 2px solid red;

  @media (max-width: 768px) {
    width: auto;
  }

  button {
    background: linear-gradient(135deg, #d49e17, #b8860b);
    color: #fff;
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
    box-shadow: 0 12px 28px rgba(212, 158, 23, 0.45);
  }

  button:active {
    transform: translateY(-1px);
  }
`;
const SEcondButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-right: 5px;
  // border: 2px solid red;

  @media (max-width: 768px) {
    width: auto;
  }

  button {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    height: 90%;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.35s ease;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #d49e17;
    color: #d49e17;
    transform: translateY(3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
  }

  button:active {
    transform: translateY(-1px);
  }
`;
