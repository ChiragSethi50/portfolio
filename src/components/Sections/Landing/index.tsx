import { ButtonBase, Stack, Typography } from "@mui/material";
import styles from "./landing.module.css";
import Link from "next/link";
import { LINKS } from "@/constants/links";

const LandingSection = () => {
  return (
    <Stack className={styles.landingTextContainer}>
      <Typography className={styles.landingText}>Hi, my name is</Typography>
      <Typography className={styles.name}>Chirag Sethi.</Typography>
      <Typography className={styles.profile}>I create things for the web.</Typography>
      <Typography className={styles.description}>
        Full Stack Developer with a proven track record in designing, implementing, and maintaining
        scalable web applications. Committed to delivering high-quality code. utilizing a diverse
        set of programming languages, frameworks, and tools to create efficient and user-friendly
        solutions. Currently working at <Link href={"https://zenmonk.tech/"}>Zenmonk</Link>.
      </Typography>
      <ButtonBase
        style={{
          marginTop: 56,
        }}
        className="global-btn"
        type="a"
        href={LINKS.github}
        target="_blank"
      >
        Check out my github!
      </ButtonBase>
    </Stack>
  );
};

export default LandingSection;
