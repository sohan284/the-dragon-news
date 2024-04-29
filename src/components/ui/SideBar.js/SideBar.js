import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import sideBarImg from "@/assets/side-top-news.png";
import blankImg from "@/assets/blankImage.png";
import sideBottomImg from "@/assets/side-bottom-img.png";
import getCurrentDateInfo from "@/utils/getCurrentDate";

const SideBar = () => {
  const currentdate = getCurrentDateInfo();
  return (
    <Box>
      <Card className="my-5">
        <CardMedia>
          <Image src={sideBarImg} width={800} height={500} alt="img" />
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
      <Grid container className="my-5 border-t-2">
        <Grid item xs={3} md={3}>
              <Image className="mt-5" src={blankImg} height={0} width={0} alt="img" />
        </Grid>
        <Grid item xs={8} md={8} className="mx-1 mt-5">
          <Typography className="text-wrap text-md">
            Lizards are a widespread group ranging across 
          </Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            {currentdate}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="my-5 border-t-2">
        <Grid item xs={3} md={3}>
              <Image className="mt-5" src={blankImg} height={0} width={0} alt="img" />
        </Grid>
        <Grid item xs={8} md={8} className="mx-1 mt-5">
          <Typography className="text-wrap text-md">
            Lizards are a widespread group ranging across 
          </Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            {currentdate}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="my-5 border-t-2">
        <Grid item xs={3} md={3}>
              <Image className="mt-5" src={blankImg} height={0} width={0} alt="img" />
        </Grid>
        <Grid item xs={8} md={8} className="mx-1 mt-5">
          <Typography className="text-wrap text-md">
            Lizards are a widespread group ranging across 
          </Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            {currentdate}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="my-5 border-t-2">
        <Grid item xs={3} md={3}>
              <Image className="mt-5" src={blankImg} height={0} width={0} alt="img" />
        </Grid>
        <Grid item xs={8} md={8} className="mx-1 mt-5">
          <Typography className="text-wrap text-md">
            Lizards are a widespread group ranging across 
          </Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            {currentdate}
          </Typography>
        </Grid>
      </Grid>
      <Image src={sideBottomImg} height={0} width={0} alt="img"/>
    </Box>
  );
};

export default SideBar;
