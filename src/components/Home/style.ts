import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, 4rem);
  grid-template-rows: repeat(auto-fill, 4rem);
  grid-gap: 2rem;
`

export const Box1 = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 7;
  grid-column: 1 / 10;
  border-radius: 1rem;
  background-color: #F1F1F1;
  border: 0.1rem solid #ccc;
  transition: all 0.5s;
  &:hover {
    width: calc(100vw - 8rem);
    height: calc(100vh - 8rem);
  }
`

export const Box2 = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 10 / 15;
  grid-row: 1 / 12;
  border-radius: 1rem;
  background-color: #f1f1f1;
  border: 0.1rem solid #ccc;
  transition: all 0.5s;
  &:hover {
    width: calc(100vw - 8rem);
    height: calc(100vh - 8rem);
  }
`;