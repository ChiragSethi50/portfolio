import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <Stack className={styles.navbar}>
        <Box />
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} gap={2}>
        <Typography>About</Typography>
        <Typography>Experience</Typography>
        <Typography>Work</Typography>
        <Typography>Resume</Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
