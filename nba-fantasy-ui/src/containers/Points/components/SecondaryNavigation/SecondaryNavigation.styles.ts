import styled from "styled-components";

export const StyledSecondaryNavigation = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  margin-bottom: 24px;
`;

export const StyledNavigationItem = styled.div<{ isactive: boolean }>`
  display: flex;
  justify-content: center;
  width: 50%;
  border: ${({ isactive }) => (isactive ? "2px solid #2196f3" : "initial")};
  padding: 8px 4px;
  border-radius: 8px;
  transition: 0.1s ease-out all;
  svg {
    width: 50px;
    height: 50px;
    fill: ${({ isactive }) => (isactive ? "#2196f3" : "black")};
    transition: 0.1s ease-out all;
    cursor: pointer;
  }
`;
