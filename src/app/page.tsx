import styles from "./page.module.css";
import { Stack, Typography } from "@mui/material";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";
import LandingSection from "@/components/Sections/Landing";

export default function Home() {
  return (
    <div className={styles.page}>

      <LandingSection />

      <Stack className={styles.socialMediaLinks}>
        <Link href="http://www.linkedin.com/in/chirag-sethi50" target="_blank" color="#a8b2d1">
          <LinkedinIcon className={styles.socialMediaIcons} />
        </Link>

        <Link href="https://github.com/ChiragSethi-1153" target="_blank" color="#a8b2d1">
          <GithubIcon className={styles.socialMediaIcons} />
        </Link>

        <Link href="https://www.instagram.com" target="_blank" color="#a8b2d1">
          <InstagramIcon className={styles.socialMediaIcons} />
        </Link>

        <hr className={styles.footerVerticalLine} />
      </Stack>

      <Stack className={styles.emailLink}>
        <Typography className={styles.emailLinkText}>chiragsethi50@gmail.com</Typography>
        <hr className={styles.footerVerticalLine} />
      </Stack>
    </div>
  );
}
