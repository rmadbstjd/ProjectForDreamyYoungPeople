import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 8;
  display: flex;
  width: 15.063rem;
  height: 4.063rem;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 1.5rem;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

export const YearContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.313rem;
  border: solid #dedede 1px;
  width: 6.25rem;
  height: 2.125rem;
  align-items: center;
  margin-right: 0.25rem;
  cursor: pointer;
  &:hover {
    background: #fafbfc;
  }
`;

export const MonthContainer = styled.div`
  display: flex;
  border-radius: 0.313rem;
  border: solid #dedede 1px;
  width: 4.5rem;
  height: 2.125rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #fafbfc;
  }
`;

export const PrevButton = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const NextButton = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const SelectIcon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
export const Dropdown = styled.div`
  position: absolute;
  top: 2.188rem;
  border-radius: 0.313rem;
  width: 6.25rem;
  height: 10.25rem;
  color: #333333;
  overflow-y: scroll;
  background: #ffffff;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  & > :first-of-type {
    margin-top: 0.5rem;
  }
`;

export const SelectableYear = styled.div`
  display: flex;
  align-items: center;
  height: 2.313rem;
  &:hover {
    background: #f6f7f8;
  }
  & > span {
    position: relative;
    left: 0.938rem;
  }
`;
