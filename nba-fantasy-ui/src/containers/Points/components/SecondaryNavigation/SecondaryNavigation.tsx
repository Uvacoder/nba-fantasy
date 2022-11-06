import {
  StyledSecondaryNavigation,
  StyledNavigationItem,
} from "./SecondaryNavigation.styles";
import { Cat, Roto } from "../index";
import { PointTypes } from "../../types";

export const SecondaryNavigation = ({ type, onChangeType, children }: any) => {
  return (
    <>
      <StyledSecondaryNavigation>
        <StyledNavigationItem
          onClick={() => onChangeType(PointTypes.rotisserie)}
          isactive={type === PointTypes.rotisserie}
        >
          <Roto />
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={() => onChangeType(PointTypes.categories)}
          isactive={type === PointTypes.categories}
        >
          <Cat />
        </StyledNavigationItem>
      </StyledSecondaryNavigation>
      {children}
    </>
  );
};
