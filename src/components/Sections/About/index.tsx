import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import styles from "./about.module.css";
import { Skills } from "./skills";
import ProfilePic from "../../../assets/Chirag.png"
import Image from "next/image";

const About = () => {
  return (
    <Stack id="about" className={styles.aboutSection}>
      <Typography className={styles.title}>About Me</Typography>
      <Box className={styles.aboutSectionContent}>
        <Stack className={styles.textContainer}>
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
          <Box className={styles.aboutImageWrapper}>
            <Image src={ProfilePic} alt="" className={styles.aboutImg} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default About;
