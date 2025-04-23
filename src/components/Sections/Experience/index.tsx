import { Stack, Typography } from "@mui/material";
import styles from "./experience.module.css"
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  return (
    <Stack id="experience" className={styles.experienceSection}>
      <Typography className={styles.title}>Where I've Worked</Typography>
      <ExperienceTabs />
    </Stack>
  );
};

export default Experience;
