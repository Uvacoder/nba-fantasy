import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const StyledCategoriesLoadingSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCategoryLeaders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10%;
  margin-bottom: 36px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  max-width: 120px;
`;

export const StyledAvatarSkelton = styled(Skeleton)`
  margin-bottom: 12px;
`;
