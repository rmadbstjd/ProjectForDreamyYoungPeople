import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 2100px;
  margin: 0 auto;
`;

export const SideMenu = styled.div`
  width: 256px;
  border-right: solid #e0e4e8 2px;
  height: 100%;
  background: #fafbfb;
`;

export const Content = styled.div`
  width: 87%;
  background: beige;
`;

export const Header = styled.span`
  position: relative;
  left: 41px;
  top: 10px;
  color: #333333;
  font-size: 24px;
  font-weight: bolder;
`;

export const Form = styled.div`
  width: 94.5%;
  margin: 0 auto;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 943px;
  height: 56px;
`;
export const RadioRightContainer = styled.div`
  position: relative;
  left: 64px;
`;
export const RadioContainer = styled.div`
  display: flex;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  width: 943px;
  height: 86px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  position: relative;
  left: 64px;
`;

export const OptionTitle = styled.span`
  width: 140px;
  height: 22px;
  color: #333333;
  font-size: 14px;
`;

export const DefaultValue = styled.span`
  position: relative;
  left: 64px;
  color: #333333;
  font-size: 14px;
`;

export const Date = styled.div`
  border-radius: 5px;
  border: solid #dedede 1px;
  position: relative;
  left: 63px;
  width: 160px;
  height: 24px;
  font-size: 14px;
  background: white;
  &:focus {
    outline: none;
  }
  text-align: left;
  cursor: pointer;
  color: #bebebe;
`;

export const Text = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: red;
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
`;
