"use client";
import styles from "./page.module.css";
import { Fade, Stack, Typography } from "@mui/material";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";
import LandingSection from "@/components/Sections/Landing";
import { LINKS } from "@/common/links";
import About from "@/components/Sections/About";
import { useEffect, useState } from "react";
import AnimatedLoader from "@/components/AnimatedLoader";
import Experience from "@/components/Sections/Experience";
import Work from "@/components/Sections/Work";
import Contact from "@/components/Sections/Contact/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <AnimatedLoader />
      ) : (
        <Fade in={!isLoading} timeout={1000}>
          <Stack className={styles.page}>
            <LandingSection />
            <About />
            <Experience />
            <Work />
            {/* <Contact /> */}

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
              <Typography
                component={"a"}
                className={styles.emailLinkText}
                href={`mailto:${LINKS.email}`}
              >
                {LINKS.email}
              </Typography>
              <hr className={styles.footerVerticalLine} />
            </Stack>
          </Stack>
        </Fade>
      )}
    </>
  );
}
