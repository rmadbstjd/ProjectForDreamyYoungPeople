import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  left: 0.625rem;
  width: 13.125rem;
  height: 12.5rem;
  justify-content: space-between;
  font-size: 14px;
`;

export const Day = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  text-align: center;
  &:hover {
    position: relative;
    top: -0.125rem;
    border-radius: 1rem;
    background: #dbe1fd;
    color: white;
    text-align: center;
    & > span {
      position: relative;
      top: 0.188rem;
    }
  }
  cursor: pointer;
`;

export const Text = styled.span`
  color: ${(props) => (props.isValid ? "#333333" : "#bebebe")};
`;

export const SelectedDay = styled.div`
  margin: 0 auto;
  border-radius: 1rem;
  border: solid #024eee;
  width: 1.5rem;
  height: 1.5rem;
  background: #024eee;
  color: white;
  text-align: center;
`;

export const Week = styled.div`
  display: flex;
  width: 12.5rem;
  & > :first-of-type {
    margin-left: -0.5rem;
  }
`;
