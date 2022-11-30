import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 15px;
  background: #ccc;
  color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Link = styled.a`
  text-decoration: none;
  :link {
    color: #f4f7f6;
  }

  :visited {
    color: green;
  }

  :hover {
    color: #000000;
  }

  :active {
    color: blue;
  }
`;

export const Text = styled.span`
  font-size: 15px;
  color: #f4f7f6;
`;
