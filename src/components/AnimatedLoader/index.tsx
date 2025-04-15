import { CircularProgress, Box } from "@mui/material";
import styles from "./animated-loader.module.css";

const AnimatedLoader = () => {
  return (
    <Box className={styles.animatedLoaderWrapper}>
      {/* <CircularProgress /> */}
      <div className={styles.animationContainer}>
        <div className={styles.line}></div>
        <div className={styles.text}>CS</div>
      </div>
    </Box>
  );
};

export default AnimatedLoader;
