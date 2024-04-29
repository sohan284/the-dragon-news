import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import topNews from "@/assets/top-news.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box>
      <Card className="m-5">
        <CardMedia>
          <Image src={topNews} width={800} height={500} alt="img" />
        </CardMedia>
        <p className="w-[100px] bg-red-500 text-white p-1 my-5">Technology</p>
        <CardContent>
          <Typography>Lizard</Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
          <Card className="m-5">
            <CardMedia>
              <Image src={topNews} width={800} height={500} alt="img" />
            </CardMedia>
            <p className="w-[100px] bg-red-500 text-white p-1 my-5">
              Technology
            </p>
            <CardContent>
              <Typography>Lizard</Typography>
              <Typography>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card className="m-5">
            <CardMedia>
              <Image src={topNews} width={800} height={500} alt="img" />
            </CardMedia>
            <p className="w-[100px] bg-red-500 text-white p-1 my-5">
              Technology
            </p>
            <CardContent>
              <Typography>Lizard</Typography>
              <Typography>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card className="m-5">
            <CardMedia>
              <Image src={topNews} width={800} height={500} alt="img" />
            </CardMedia>
            <p className="w-[100px] bg-red-500 text-white p-1 my-5">
              Technology
            </p>
            <CardContent>
              <Typography>Lizard</Typography>
              <Typography>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card className="m-5">
            <CardMedia>
              <Image src={topNews} width={800} height={500} alt="img" />
            </CardMedia>
            <p className="w-[100px] bg-red-500 text-white p-1 my-5">
              Technology
            </p>
            <CardContent>
              <Typography>Lizard</Typography>
              <Typography>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
