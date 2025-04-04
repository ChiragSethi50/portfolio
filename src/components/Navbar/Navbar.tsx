import { Box, Stack, Typography } from "@mui/material";
import styles from "./navbar.module.css";
import Link from "next/link";
import { NavLinks } from "../../constants/navlinks";

const Navbar = () => {
  return (
    <Stack className={styles.navbar}>
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
