import {
  StyledSecondaryNavigation,
  StyledNavigationItem,
} from "./SecondaryNavigation.styles";
import { Cat, Roto } from "../index";

export const SecondaryNavigation = ({ type, onChangeType, children }: any) => {
  return (
    <>
      <StyledSecondaryNavigation>
        <StyledNavigationItem
          onClick={() => onChangeType("roto")}
          isactive={type === "roto"}
        >
          <Roto />
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={() => onChangeType("cat")}
          isactive={type === "cat"}
        >
          <Cat />
        </StyledNavigationItem>
      </StyledSecondaryNavigation>
      {children}
    </>
  );
};
