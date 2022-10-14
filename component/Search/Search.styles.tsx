import styled from "styled-components";

export const InputSearch = styled.input.attrs({ type: "search" })`
  width: 220px;
  height: 25px;
  border: none;
  color: green;
  &:focus {
    outline: none;
  }
`;
