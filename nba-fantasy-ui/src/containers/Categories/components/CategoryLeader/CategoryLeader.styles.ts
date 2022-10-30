import styled, { keyframes } from "styled-components";
import { Avatar } from "@mui/material";

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
  margin-bottom: 12px;
  animation: ${wiggle} 4s linear infinite;
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 100px;
    width: 100px;
    margin-bottom: 12px;
  }
`;
