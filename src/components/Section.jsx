import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useSelector } from "react-redux";
import { SelectHouse } from "./feature/state/HouseSlice";
import { SelectLand } from "./feature/state/LandSlice";
// import { SelectHouse } from "./feature/state/HouseSlice";
// import { useSelector } from "react-redux";
function Section() {
  const houses = useSelector(SelectHouse);
  const lands = useSelector(SelectLand);
  return (
    <Container>
      <FirstContent>
        <ImageWrapper>
          <img src="images/selfImage.png" alt="An Image Of My Self" />
        </ImageWrapper>
        <ContentWrapper>
          <About>
            <h1 className="">About me</h1>
            <h4>Your Real Estate Partner You Can Trust</h4>
            <p className="way">
              I am here to make your property journey simple and successful.
              whether you are Buying, Selling, Investing, I provide expert
              guidance and personalized service every step of the way.
            </p>
          </About>
          <List>
            <ol>
              <li>
                <CheckCircleIcon />
                Local Market Expert
              </li>
              <li>
                <CheckCircleIcon />
                Personalized Service
              </li>
              <li>
                <CheckCircleIcon />
                Quick & Easy Process
              </li>
              <li>
                <CheckCircleIcon />
                100% Client Satisfaction
              </li>
            </ol>
          </List>
          <Button>
            <button>
              <WhatsAppIcon />
              chat on WhatsApp
            </button>
          </Button>
        </ContentWrapper>
      </FirstContent>
      <SecondContent>
        <Features>
          <h3 className="feat">FEATURED PROPERTIES</h3>
          <h3 className="hand">Handpicked Just For You</h3>
        </Features>
        <HouseWRapper>
          <h3>Affordable Houses With Comfort</h3>
          <Houses>
            {houses &&
              houses.map((house) => (
                <div key={house.id}>
                  <span>
                    <img
                      className="house"
                      src={house.img}
                      alt={house.name}
                      loading="lazy"
                    />
                  </span>

                  <span>
                    <h2>{house.name}</h2>
                    <p>{house.location}</p>
                    <p className="p">{house.price}</p>
                  </span>
                </div>
              ))}
          </Houses>
        </HouseWRapper>
        <LandWrapper>
          <h3>Affordable Land With Comfort</h3>
          <Land>
            {lands &&
              lands.map((land) => (
                <div key={land.id}>
                  <span>
                    <img
                      className="land"
                      src={land.img}
                      loading="lazy"
                      alt=""
                    />
                  </span>
                  <span>
                    <h2>{land.name}</h2>
                    <p>{land.location}</p>
                    <p className="p">{land.price}</p>
                  </span>
                </div>
              ))}
          </Land>
        </LandWrapper>
      </SecondContent>
      <ThirdContent>
        <Work>
          <h3 className="work">Why Work With Me</h3>
          <h2 className="wrk">I Make Real Estate Simple</h2>
        </Work>
        <Details>
          <div className="div1">
            <IMAGE>
              <HandshakeIcon />
            </IMAGE>
            <Trust>
              <h3>Trusted & Reliable</h3>
              <p>Honest advice and transparent deals you can count on.</p>
            </Trust>
          </div>
          <div className="div2">
            <Image2>
              <AdsClickIcon />
            </Image2>
            <Best>
              <h3>Best Opportunities</h3>
              <p>Access to the best properties at the right price</p>
            </Best>
          </div>
          <div className="div3">
            <Image3>
              <AccessTimeIcon />
            </Image3>
            <Save>
              <h3>Save Time & Effort </h3>
              <p>I handle the details so you don't have to</p>
            </Save>
          </div>
          <div className="div4">
            <Image4>
              <HeadsetMicIcon />
            </Image4>
            <Always>
              <h3>Always here</h3>
              <p>I am just a message away Whenever you need me</p>
            </Always>
          </div>
        </Details>
      </ThirdContent>
    </Container>
  );
}

export default Section;

const LandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  // border: 2px solid green;
  h3 {
    line-height: 100%;
    font-size: 16px;
    font-weight: 700;
    // border: 2px solid black;
    padding: 15px 0px 12px 22px;
  }
`;
const Land = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  // height: 500px;
  padding: 10px 20px;

  // border: 2px solid red;
  @media (min-width: 628px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: 628px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  div {
    // border: 2px solid red;
    // height: 340px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      border-radius: 15px;
    }
  }
  span {
    // border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    h2 {
      font-size: 18px;
      font-weight: 450;
      line-height: 100%;
      padding-left: 5px;
      // border: 2px solid green;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 100%;
      padding-top: 3px;
      padding-left: 5px;
      // border: 2px solid green;
    }
    .p {
      text-align: end;
      padding-right: 5px;
      color: #d49e17;
      // border: 2px solid green;
    }
  }

  .land {
    width: 100%;
    border-radius: 5px;
    // border: 2px solid red;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Image2 = styled.div`
  svg {
    font-size: 45px;
    color: #d49e17c7;
  }
`;
const Best = styled.div`
  width: 100%;
  max-width: 250px;
  // border: 2px solid green;

  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    // border: 2px solid green;
  }
  p {
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    // border: 2px solid green;
  }
  // border: 2px solid red;
`;
const Image3 = styled.div`
  svg {
    font-size: 45px;
    color: #d49e17c7;
  }
`;
const Save = styled.div`
  width: 100%;
  max-width: 250px;
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    // border: 2px solid green;
  }
  p {
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    // border: 2px solid green;
  }
  // border: 2px solid red;
`;
const Image4 = styled.div`
  svg {
    font-size: 45px;
    color: #d49e17c7;
  }
`;
const Always = styled.div`
  width: 100%;
  max-width: 250px;
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    // border: 2px solid green;
  }
  p {
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    // border: 2px solid green;
  }
  // border: 2px solid red;
`;
const Trust = styled.div`
  width: 100%;
  max-width: 250px;
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    // border: 2px solid green;
  }
  p {
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    // border: 2px solid green;
  }
  // border: 2px solid red;
`;
const IMAGE = styled.div`
  svg {
    font-size: 45px;
    color: #d49e17c7;
  }
`;
const Work = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  // border: 2px solid red;
  align-items: center;
  margin-top: 10px;
  padding: 60px 0px 0px 0px;
  .work {
    font-size: 17px;
    color: #d49e17;
    font-weight: 600;
    // border: 2px solid green;
  }
  .wrk {
    font-size: 22px;
    font-weight: 700;
    line-height: 100%;
    // border: 2px solid green;
  }
  @media (max-width: 600px) {
    .wrk {
      font-size: 17px;
    }

    .work {
      font-size: 14px;
    }
  }
`;
const Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 0px;
  // border: 2px solid red;

  .div1,
  .div2,
  .div3,
  .div4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #00000031;
    // border: 2px solid yellow;
    justify-content: center;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 100%;
  // border: 2px solid red;
  .feat {
    color: #d49e17;
    font-size: 16px;
    font-weight: 600;
    padding-top: 20px;
    // border: 2px solid green;
  }
  .hand {
    font-size: 24px;
    font-weight: 450;
    line-height: 100%;
    letter-spacing: 0.4px;
    padding-top: 20px;
    // border: 2px solid green;
  }
`;
const HouseWRapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  // border: 2px solid green;
  h3 {
    line-height: 100%;
    font-size: 16px;
    font-weight: 700;
    // border: 2px solid black;
    padding: 15px 0px 12px 22px;
  }
`;
const Houses = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  // height: 500px;
  padding: 10px 20px;

  // border: 2px solid red;
  @media (min-width: 628px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
     div {
      // min-height: 420px;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }

    .house {
      height: 260px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
  @media (max-width: 628px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    div {
      width: 100%;
      max-width: 500px;
      // margin: 0 auto;
      // min-height: 470px;
    }

    .house {
      height: 300px;
    }

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }
  }
  }
  div {
    // border: 2px solid red;
    border-radius: 12px;
    overflow: hidden;
    // height: 340px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      border-radius: 15px;
    }
  }
  span {
    // border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    h2 {
      font-size: 18px;
      font-weight: 450;
      line-height: 100%;
      padding-left: 5px;
      // border: 2px solid green;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 100%;
      padding-top: 3px;
      padding-left: 5px;
      // border: 2px solid green;
    }
    .p {
      text-align: end;
      padding-right: 5px;
      color: #d49e17;
      // border: 2px solid green;
    }
  }

  .house {
    width: 100%;
    border-radius: 5px;
    // border: 2px solid red;
    object-fit: cover;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Button = styled.div`
  width: auto;
  // border: 2px solid red;
  button {
    background: linear-gradient(135deg, #d49e17, #b8860b);
    color: #fff;
    height: 37px;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.35s ease;
    // border: 2px solid green;
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
const List = styled.div`
  width: auto;
  // border: 2px solid red;
  svg {
    color: #d49e17;
  }
  li {
    font-size: 17px;
    font-weight: 400;
    padding: 5px 0px;
    // border: 2px solid green;
  }
`;
const About = styled.div`
        padding-top:5px;
    h1 {
      width: auto;
      font-size: 20px;
      max-width:126px;
      font-weight: 700;
      // border: 2px solid red;
      line-height:100%;
      color: #d49e17;
        padding-top:5px;
      @media (max-width: 768px) {
        font-size: 18px;
        font-weight: 400;
      }
    }
    h4 {
      // border: 2px solid red;
      font-weight: 500;
        padding-top:5px;
      line-height:100%;
      max-width:326px;
      width: auto;
      font-size: 17px;
      
      @media (max-width: 768px) {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  .way {
    width: auto;
    // width: 300px;
        padding-top:5px;
      line-height: 100%;
    font-size: 17px;
      max-width:426px;
    font-weight: 500;
    // border: 2px solid red;
    @media (max-width: 768px) {
      font-size: 15px;
      font-weight: 500;
      // letter-spacing: 1px;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  // background: linear-gradient(
  //   90deg,
  //   rgba(231, 225, 225, 0.67),
  //   rgba(235, 227, 227, 0.67),
  //   rgba(218, 210, 210, 0.54)
  // );
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(50px);
`;
const FirstContent = styled.div`
  // border: 2px solid blue;
  width: 100%;
  display: flex;
  // align-items: flex-start;
  flex-direction: row;
  margin: auto;
  @media (min-width: 620px) and (max-width: 768px) {
    justify-content: space-between;
    gap: 5px;
  }
  @media (min-width: 500px) and (max-width: 620px) {
    justify-content: space-between;
    gap: 5px;
  }
  @media (max-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
`;
const SecondContent = styled.div`
  // border: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #3a445034;
  align-items: center;
  // align-items: flex-start;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  margin: auto;
`;
const ThirdContent = styled.div`
  // border: 2px solid green;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin: auto;
`;
const ImageWrapper = styled.div`
  padding: 35px 0px;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
  // border: 2px solid blue;
  width: auto;
  margin-left: 30px;
  @media (min-width: 620px) and (max-width: 800px) {
    margin: 0px;
  }
  @media (min-width: 500px) and (max-width: 620px) {
    margin: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(108, 99, 255, 0.35);
  }
  // border: 2px solid red;
  img {
    width: 330px;
    height: 340px;
    // display: block;
    border-radius: 17px;
    padding-left: 10%;
    // margin-left: 70px;
    transition: transform 0.4s ease;
    // border: 2px solid red;
    &:hover {
      transform: translateY(3px);
      transform: translateX(3px);
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 0px;
  gap: 10px;
  // width: 40%;
  width: auto;
  max-width: 450px;
  // margin-left: 20%;
  // border: 2px solid red;
  @media (min-width: 500px) and (max-width: 620px) {
  }
`;
