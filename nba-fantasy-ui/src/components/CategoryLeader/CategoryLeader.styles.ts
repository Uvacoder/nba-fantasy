import styled, { keyframes } from "styled-components";
import { Avatar, Card, CardContent, Divider, Typography } from "@mui/material";

const wiggle = keyframes`
0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;

export const StyledCategoryLeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${wiggle} 4s linear infinite;
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 150px;
    width: 150px;
    margin-bottom: 16px;
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
