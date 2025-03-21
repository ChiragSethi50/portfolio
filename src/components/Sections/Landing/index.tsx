import { Stack, Typography } from "@mui/material";
import styles from "./landing.module.css"

const LandingSection = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography className={styles.greetingText}>
            Hi, my name is
        </Typography>
        
    </Stack>
  );
};

export default LandingSection;
