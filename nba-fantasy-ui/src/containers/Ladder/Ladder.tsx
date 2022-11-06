import { useEffect, useState } from "react";
import {
  CategoriesLoadingSkeleton,
  CategoryTable,
  CategoryLeaderList,
  CategoryTableHead,
} from "./components";
import { StyledCategories, StyledHeading } from "./Ladder.styles";
import { getLadder } from "../../services";
import { Typography } from "@mui/material";

const mockLadderData: any = {
  "Team Alphonso": 1,
  "Big Black Cockatoos": 1,
};

export const Ladder = () => {
  const [ladder, setLadder] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getLadder();

        setLadder(response);
      } catch {}
    };
    loadData();
  }, []);

  return (
    <StyledCategories>
      <Typography>Points winners</Typography>
      {ladder &&
        Object.keys(ladder).map((team) => (
          <Typography>
            {team} - {ladder[team]}
          </Typography>
        ))}
    </StyledCategories>
  );
};
