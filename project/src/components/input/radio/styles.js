import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 62px;
  height: 24px;
  margin-right: 32px;
`;

export const CustomRadio = styled.label`
  display: inline-block;
  width: ${(props) => (props.isChecked ? "24px" : "16px")};
  height: ${(props) => (props.isChecked ? "24px" : "16px")};
  background-image: ${(props) => `url(${props.background})`};
  position: relative;
  top: ${(props) => props.isChecked && "1.2px"};
  right: ${(props) => props.isChecked && "3.2px"};
  cursor: pointer;
`;
export const Label = styled.label`
  position: relative;
  top: ${(props) => (props.isChecked ? "-9.5px" : "-3px")};
  right: ${(props) => (props.isChecked ? "3px" : "-5px")};
  font-size: 14px;
`;
