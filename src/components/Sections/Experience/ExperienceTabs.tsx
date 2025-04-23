import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./experience.module.css";
import { useState } from "react";
import Link from "next/link";
import { LINKS } from "@/constants/links";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={styles.tabPanelContainer}
      {...other}
    >
      {value === index && <Box className={styles.tabPanel}>{children}</Box>}
    </div>
  );
}

export default function ExperienceTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.experienceTabsContainer} sx={{}}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        slotProps={{
          indicator: {
            className: `${styles.tabIndicator}`,
          },
        }}
        sx={{
          "& .Mui-selected": {
            color: "var(--green) !important",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fz-xs)",
            textAlign: "left",
            whiteSpace: "nowrap",
          },
        }}
      >
        <Tab className={styles.tabs} label="Zenmonk" />
        <Tab className={styles.tabs} label="Internship" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography className={styles.workplacePosition}>
          Full Stack Developer{" "}
          <Link href={LINKS.zenmonk} className={styles.workplaceLink}>
            @ Zenmonk
          </Link>
        </Typography>
        <Typography className={styles.range}>February 2025 - Present</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Internship
      </TabPanel>
    </Box>
  );
}
