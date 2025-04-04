import { Box, Stack, Typography } from "@mui/material";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack className={styles.navbar}>
      <Box />
      <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} gap={2}>
        <Link href={"#about"}>
          <Typography className={styles.navbarLink}>About</Typography>
        </Link>
        <Link href={"/#experience"}>
          <Typography className={styles.navbarLink}>Experience</Typography>
        </Link>
        <Link href={"/#work"}>
          <Typography className={styles.navbarLink}>Work</Typography>
        </Link>
        <Link href={"/#resume"}>
          <Typography className={styles.navbarLink}>Resume</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
