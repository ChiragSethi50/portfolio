import styles from "./page.module.css";
import { Stack, Typography } from "@mui/material";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";
import LandingSection from "@/components/Sections/Landing";
import { LINKS } from "@/constants/links";
import About from "@/components/Sections/About";

export default function Home() {
  return (
    <Stack className={styles.page}>

      <LandingSection />
      <About />

      <Stack className={styles.socialMediaLinks}>
        <Link href={LINKS.linkedIn} target="_blank" color="#a8b2d1">
          <LinkedinIcon className={styles.socialMediaIcons} />
        </Link>

        <Link href={LINKS.github} target="_blank" color="#a8b2d1">
          <GithubIcon className={styles.socialMediaIcons} />
        </Link>

        <Link href={LINKS.instagram} target="_blank" color="#a8b2d1">
          <InstagramIcon className={styles.socialMediaIcons} />
        </Link>

        <hr className={styles.footerVerticalLine} />
      </Stack>

      <Stack className={styles.emailLink}>
        <Typography className={styles.emailLinkText}>{LINKS.email}</Typography>
        <hr className={styles.footerVerticalLine} />
      </Stack>
    </Stack>
  );
}
