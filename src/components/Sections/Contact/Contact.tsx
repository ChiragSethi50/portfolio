import { ButtonBase, Stack, Typography } from "@mui/material";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <Stack className={styles.contactContainer}>
      <Typography className={styles.contactTitle}>Get in Touch</Typography>
      <Typography className={styles.contactDescription}>
        Always looking for any new opportunities, my inbox is always open. Whether you have a
        question or just want to say hi, I’ll try my best to get back to you ASAP!
      </Typography>
      <ButtonBase className={`global-btn ${styles.contactBtn}`}>Say Hello</ButtonBase>
    </Stack>
  );
};

export default Contact;
