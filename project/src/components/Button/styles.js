import styled from "@emotion/styled";
export const Button = styled.button`
  border: solid black 0px;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: ${(props) => props.background || "white"};
  font-size: 14px;
  line-height: 10%;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.hoverBackground === undefined ? "white" : props.hoverBackground};
  }
`;
