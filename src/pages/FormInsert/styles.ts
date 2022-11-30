import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  //align-items: stretch;
`;

export const Content = styled.div`
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  margin: -99px auto 0;
  width: 100%;
  max-width: 700px;

  .label {
    font-size: 20px;
    margin: 14px;
    padding-top: 15px;
    font-weight: bold;
    color: #737380;
    line-height: 12px;
    text-align: left;
  }
`;

export const Input = styled.div`
  input {
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #232129;
    color: #666360;

    align-items: center;
    & + input {
      margin-top: 8px;
    }

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Select = styled.div`
  select {
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #232129;
    color: #666360;

    align-items: center;
    & + input {
      margin-top: 8px;
    }

    &::placeholder {
      color: #666360;
    }
  }
`;

export const CheckBox = styled.div`
  font-size: 18px;
  margin: 14px;
  padding-top: 15px;
  color: #737380;
  line-height: 16px;
  text-align: left;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 14px;
    list-style: none;
  }

  ul li {
    position: relative;
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;

  .aviso {
    font-size: 28px;
    margin: 34px;
    padding: 95px;
    color: #737380;
    line-height: 16px;
    text-align: left;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 90%;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
`;
