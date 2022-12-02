import SingleCard from "./singleCard";
import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

const Main = ({ list }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} ml={12} mt={4} mb={4}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 5, sm: 8, md: 12 }}
        >
          {list.map((elem, idx) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={idx}>
                <SingleCard elem={elem} key={idx} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Main;
