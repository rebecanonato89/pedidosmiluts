import styled from "styled-components";
import { shade, lighten } from "polished";

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;
    padding: 15px;
    display: flex;
    align-items: center;
    h1 {
      color: #fff;
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      margin-bottom: 24px;
      font-size: 30px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -130px auto 0;
  width: 100%;
  margin-bottom: auto;
`;

export const Avatar = styled.div`
  margin-bottom: 5px;
  align-self: center;


  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;
