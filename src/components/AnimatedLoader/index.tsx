import { CircularProgress, Box } from "@mui/material";
import styles from "./animated-loader.module.css";
import StartAnimation from '@/assets/animation/startingLoader.gif'
import Image from "next/image";

const AnimatedLoader = () => {
  return (
    <Box className={styles.animatedLoaderWrapper}>
      <Image alt="" src={StartAnimation} height={500} width={500} />
    </Box>
  );
};

export default AnimatedLoader;
