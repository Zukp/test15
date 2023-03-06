import React from "react";
import styled from "styled-components";

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Div>
      <Container>
        <T>
          <h5>Проектирование Изготовление Монтаж</h5>
        </T>
        <div>
          <UL>
            <li>О компании</li>
            <li>Каталог</li>
            <li>Примеры работ</li>
            <li>Блог</li>
            <li>Контакты</li>
          </UL>
        </div>
        <CONTSS>
          <a onClick={handleClick} href="">
            +7 (930) 283-50-65
          </a>
          <button>Перезвоните мне!</button>
        </CONTSS>
      </Container>
    </Div>
  );
};
const Div = styled("div")`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto 200px;
`;
const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 95px;
  width: 1218px;
  border-radius: 0px;
`;
const T = styled("div")`
  height: 120px;
  width: 129px;
`;
const UL = styled("ul")`
  height: 55px;
  width: 510px;
  display: flex;
  justify-content: space-between;
  & li {
    list-style-type: none;
  }
`;
const CONTSS = styled("div")`
  display: flex;
  flex-direction: column;
  /* height: 72px; */
  width: 170px;
  border-radius: 2px;
  /* margin-right: 150px; */

  & a {
    width: 169px;
    height: 22px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    text-align: start;
    text-transform: uppercase;

    color: #202020;
    text-decoration-line: none;
  }
  & button {
    background: #ff9646;
    width: 145px;
    height: 40px;
    background: #ff9646;
    border-radius: 2px;
    border: none;
  }
`;
export default Header;
