"use client"
import { Box, Stack, Typography } from "@mui/material";
import styles from "./navbar.module.css";
import Link from "next/link";
import { NavLinks } from "../../constants/navlinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and beyond 100px
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Stack className={`${styles.navbar} ${!showNavbar ? styles.hide : ""}`}>
      <Box />
      <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} gap={2}>
        {NavLinks.map((l) => (
          <Link key={l.link} href={l.link}>
            <Typography className={styles.navbarLink}>{l.title}</Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
