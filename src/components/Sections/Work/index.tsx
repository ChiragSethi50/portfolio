import { Grid2, Stack, Typography } from "@mui/material";
import styles from "./work.module.css";
import { SmallArrow } from "@/assets";

const Work = () => {
  return (
    <Stack id="work" className={styles.workSection}>
      <Typography className={styles.title}>Some Things I've Built</Typography>

      <Grid2 container spacing={2} className={styles.gridContainer}>
        <Grid2 columns={2} className={styles.gridItem}>
          {/* <image  ></image> */}
          <Stack>
            <Typography fontSize={16} fontWeight={500}>
              Built a LinkedIn Clone <SmallArrow />
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default Work;
