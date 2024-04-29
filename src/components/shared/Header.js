import getCurrentDateInfo from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dragonImg from '@/assets/The Dragon News.png'

const Header = () => {
  const currentdate = getCurrentDateInfo();
  return (
    <Box className="w-full mx-auto my-5">
      <Container>
        <Image
          className="mx-auto"
          src={dragonImg}
          width={500}
          height={500}
          alt="logo"
        />
        <Typography color="gray" variant="body2" textAlign="center">
        An interactive online news portal that publishes in-depth coverage
        </Typography>
      </Container>
      <Typography color="gray" variant="body2" textAlign="center">
        {currentdate}
      </Typography>
    </Box>
  );
};

export default Header;
