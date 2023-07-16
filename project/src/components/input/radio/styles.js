import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 3.875rem;
  height: 1.5rem;
  margin-right: 2rem;
`;

export const CustomRadio = styled.label`
  display: inline-block;
  width: ${(props) => (props.isChecked ? "1.5rem" : "1rem")};
  height: ${(props) => (props.isChecked ? "1.5rem" : "1rem")};
  background-image: ${(props) => `url(${props.background})`};
  position: relative;
  top: ${(props) => props.isChecked && "0.075rem"};
  right: ${(props) => props.isChecked && "0.2rem"};
  cursor: pointer;
`;
export const Label = styled.label`
  position: relative;
  top: ${(props) => (props.isChecked ? "-0.594rem" : "-0.188rem")};
  right: ${(props) => (props.isChecked ? "0.188rem" : "-0.313rem")};
  font-size: 14px;
`;
