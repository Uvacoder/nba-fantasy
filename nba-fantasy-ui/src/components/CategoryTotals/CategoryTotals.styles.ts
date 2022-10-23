import styled from "styled-components";
import { Card, CardContent, Divider, Typography } from "@mui/material";

export const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-template-columns: 50px 200px 200px;
    justify-content: center;
    align-items: center;
    grid-gap: 8px 0;
    padding: 16px;
    text-align: center;
    border: 1px solid grey;
    margin-bottom: 16px;
    width: min-content;
  }
`;

// export const StyledCardHead = styled.div`
//   display: grid;
//   grid-gap: 8px 0;
//   padding: 0;
// `;

// export const StyledDate = styled(Typography)`
//   min-height: 48px;
// `;

// export const StyledImage = styled.img`
//   display: flex;
//   justify-content: center;
//   width: 60%;
//   margin: 0 auto;
// `;

// export const StyledCardContent = styled(CardContent)`
//   && {
//     padding: 0;
//     &:last-child {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const StyledDivider = styled(Divider)`
//   && {
//     width: 50%;
//     margin: 8px auto;
//   }
// `;
