import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "About",
    pathname: "/",
  },
  {
    route: "Contact",
    pathname: "/",
  },
];
const Footer = () => {
  return (
    <Box className="bg-black text-center">
      <Container>
        <Box sx={{ "& svg": { color: "white" } }}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @next design by fox-it 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
