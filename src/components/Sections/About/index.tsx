import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import styles from "./about.module.css";
import Image from "next/image";
import { GithubIcon } from "@/assets";
import { Skills } from "../../../constants/skills";

const About = () => {
  return (
    <Stack className={styles.aboutSection}>
      <Stack className={styles.aboutSectionContent}>
        <Typography className={styles.title}>About Me</Typography>
        <Typography mb={"15px"} fontSize={20}>
          Hello! My name is Chirag and I enjoy creating things that live on the internet. My
          interest in web development started back in 2024.
        </Typography>
        <Typography fontSize={20}>
          Here are a few technologies I’ve been working with recently:
        </Typography>
        <List className={styles.skillList}>
          {Skills.map((s) => {
            return (
              <ListItem key={s.skill} className={styles.skill}>
                {s.skill}
              </ListItem>
            );
          })}
        </List>
      </Stack>
      <Box className={styles.aboutImage}>
        <GithubIcon />
        {/* <Image src={""} alt="" /> */}
      </Box>
    </Stack>
  );
};

export default About;
