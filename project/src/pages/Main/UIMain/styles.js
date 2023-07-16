import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45rem;
  margin: 0 auto;
`;

export const SideContainer = styled.div`
  width: 16rem;
  border-right: solid #e0e4e8 2px;
  height: 45rem;
  background: #fafbfb;
`;

export const MainContent = styled.div`
  background: #ffffff;
`;

export const Header = styled.span`
  position: relative;
  left: 2.563rem;
  top: 0.625rem;
  color: #333333;
  font-size: 24px;
  font-weight: bolder;
`;

export const FormContainer = styled.div`
  width: 58rem;
  margin: 0 auto;
`;

export const Section = styled.div`
  position: relative;
  left: 2.563rem;
  display: flex;
  align-items: center;
  width: 58.938rem;
  height: 3.5rem;
`;

export const CalendarSection = styled.div`
  display: flex;
  position: relative;
  left: 2.563rem;
  align-items: center;
  width: 58.938rem;
  height: 3.5rem;
`;
export const RadioRightContainer = styled.div`
  position: relative;
  left: 4rem;
`;
export const RadioContainer = styled.div`
  display: flex;
`;

export const RadioSection = styled.div`
  display: flex;
  position: relative;
  left: 2.563rem;
  align-items: center;
  width: 58.938rem;
  height: 5.375rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  position: relative;
  left: 4rem;
`;

export const SectionTitle = styled.span`
  width: 8.75rem;
  height: 1.375rem;
  color: #333333;
  font-size: 14px;
`;

export const DefaultValue = styled.span`
  position: relative;
  left: 4rem;
  color: #333333;
  font-size: 14px;
`;

export const Date = styled.div`
  position: relative;
  border-radius: 0.313rem;
  border: solid #dedede 1px;
  left: 4rem;
  width: 10rem;
  height: 1.5rem;
  font-size: 14px;
  background: white;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  color: ${(props) => (props.isDefault ? "#bebebe" : "#333333")};
  &:hover {
    background: #fafbfb;
  }
`;

export const Text = styled.div`
  margin-top: 0.75rem;
  font-size: 14px;
  color: red;
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
`;

export const Calendar = styled.div`
  position: absolute;
  z-index: 999;
  top: 23.125rem;
  left: 28rem;
  background: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 56.4rem;
`;
