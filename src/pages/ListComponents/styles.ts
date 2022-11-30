import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  h1 {
    font-size: 24px;
  }
  hr {
    width: 55%;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 100px;
  width: 100%;
  max-width: 900px;

  .client {
    //display: flex;
    p {
      margin: 0;
    }
  }
`;

export const List = styled.div`
  i {
    margin-left: 15px;
  }

  .trace {
    border: 1px dashed green;
    width: 40%;
  }

  .request {
    display: flex;
    padding: 3px;

    strong {
      display: block;
      margin-bottom: 6px;
      color: #41414d;
      font-weight: bold;
    }

    p {
      margin: 0;
      margin-left: 5%;
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }

  .complement {
    display: flex;
    margin-left: 25px;

    strong {
      display: block;
      margin-bottom: 6px;
      color: #41414d;
      font-weight: 100;
    }

    p {
      margin: 0;
      margin-left: 10%;
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }

  .valueRequest {
    display: flex;
    margin-left: 15%;

    strong {
      display: block;
      margin-bottom: 6px;
      color: #41414d;
      font-weight: 500;
    }

    p {
      margin: 0;
      margin-left: 30px;
    }
  }

  .valueTotal {
    display: flex;
    margin-left: 1%;
    margin-bottom: 3%;
    font-weight: bold;

    b {
      margin: 0;
      margin-left: 300px;
      font-size: 25px;
    }
  }
`;
