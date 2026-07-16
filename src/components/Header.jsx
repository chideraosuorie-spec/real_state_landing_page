import { useState } from "react";
import styled from "styled-components";
import HouseIcon from "@mui/icons-material/House";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <Logo>
        <HouseIcon />
        <Property>
          <h3>Property </h3>
          <h3 className="h3">Expert</h3>
        </Property>
      </Logo>
      <MenuBar>
        <Nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Properties</a>
          <a href="#">Contact</a>
        </Nav>
        <Chat>
          <button>
            <a
              href="https://wa.me/2347025948545?text=Hello%20I%20am%20interested%20in%20your%20properties."
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Chat On WhatsApp
            </a>
          </button>
        </Chat>
        <MenuIconWrapper>
          <MenuIcon onClick={() => setBurgerStatus(true)} />
        </MenuIconWrapper>
        <BurgerNav $show={burgerStatus}>
          <CloseWrap>
            <CloseIcon onClick={() => setBurgerStatus(false)} />
          </CloseWrap>
          <Nav2>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Properties</a>
            <a href="#">Contact</a>
          </Nav2>
        </BurgerNav>
      </MenuBar>
    </Container>
  );
}

export default Header;
const Nav2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 5px;
  // border: 2px solid green;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style-type: none;
  padding: 20px;
  z-index: 16;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.$show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s;
  // border: 2px solid green;
  a {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    display: none;
  }
  svg {
    font-size: 32px;
    margin-left: 20px;
    margin-right: 10px;
  }
`;
const CloseWrap = styled.div`
  cursor: pointer;
  text-align: end;
`;
const MenuIconWrapper = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  svg {
    font-size: 32px;
    margin-left: 20px;
    margin-right: 10px;
  }
`;
const MenuBar = styled.div`
  display: flex;
  //   flex: 1;
  // flex: end;
  // border: 2px solid red;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  // width: 100%;
  // min-width: 0;
`;
const Nav = styled.div`
  // border: 2px solid red;
  display: flex;
  gap: 9px;
  cursor: pointer;
  // border: 2px solid red;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: #ffffff;
    font-weight: 600;
    font-size: 17px;
    transition: all 0.2s ease-out;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    &:hover {
      color: #fff;
      background: linear-gradient(
        135deg,
        rgba(212, 158, 23, 0.28),
        rgba(212, 158, 23, 0.08)
      );
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 24px rgba(212, 158, 23, 0.25);
    }
  }
`;
const Chat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid red;
  width: 230px;
  flex-shrink: 0;
  height: 50px;
  //   margin-left:5px;
  //   margin-right:5px;
  // border: 2px solid red;

  @media (max-width: 768px) {
    width: auto;
  }

  button {
    background-color: #d49e17e3;
    color: #ffffff;
    height: 90%;
    font-size: 16px;
    display: flex;
    gap: 5px;
    border: none;
    // flex-direction:center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    // letter-spacing: 1px;
    line-height: 100%;
    font-weight: 900;
    // width: 100%;
    cursor: pointer;
    // border: 2px solid green;
    &:hover {
      background: rgba(212, 158, 23, 0.9);
      backdrop-filter: blur(10px);
      transform: scale(1.03);
      box-shadow: 0 10px 25px rgba(212, 158, 23, 0.4);
    }

    @media (max-width: 468px) {
      display: none;
    }
  }
`;
const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 80px;
  // border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  // border: 2px solid red;
  width: 200px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  svg {
    color: #d49e17a9;
    font-size: 52px;
  }
`;
const Property = styled.div`
  width: 100px;
  // border: 2px solid red;
  h3 {
    color: #ffffffbb;
    line-height: 100%;
    letter-spacing: 30%;
    @media (max-width: 460px) {
      font-size: 12px;
    }
  }
  .h3 {
    color: #d49e17a9;
    // border: 2px solid green;
  }
`;
