import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #7159c1;
  padding: 35px 45px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #fff;
    }

    button {
      background-color: #FFC857;
      border: 0;
      padding: 10px 15px;
      border-radius: 5px;
      margin-top: 5px;
      color: #333;
      transition: background-color 0.2s;

      &:hover {
        background-color: #FFD166;
      }
    }
  }
`;