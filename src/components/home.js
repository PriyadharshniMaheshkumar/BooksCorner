import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import gallery from "../img/gallery.jpeg";
import { AutoSuggest } from "./auto-suggest";
import { data } from "../utils/data";
import { Select } from "./select";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export const Home = () => {
  return (
    <>
      <div>
        <img src={gallery} className="image" alt="gallery" />
      </div>
      <div>
        <h3 style={{ color: "darkcyan", fontSize: "3em" }}>
          Welcome to Books Corner !!!
        </h3>
      </div>
      <Grid container spacing={2} style={{ display: "flex" }}>
        <Grid item xs={6}>
          <Item>
            <Card className="cardItem">
              <CardContent>
                <Typography sx={{ fontSize: 30 }} color="darkcyan">
                  Authors
                </Typography>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="darkcyan"
                  style={{ textAlign: "left", padding: "20px 0" }}
                >
                  Select the authors in the list
                </Typography>
                <AutoSuggest items={data} />
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Card className="cardItem">
              <CardContent>
                <Typography sx={{ fontSize: 30 }} color="darkcyan">
                  Books
                </Typography>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="darkcyan"
                  style={{ textAlign: "left", padding: "20px 0" }}
                >
                  Select the books in the list
                </Typography>
                <Select />
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
