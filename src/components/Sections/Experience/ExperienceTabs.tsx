import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./experience.module.css";
import { useState } from "react";
import Link from "next/link";
import { LINKS } from "@/common/links";
import { experienceData } from "./experience.data";

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
        {experienceData.map((exp, index) => (
          <Tab key={index} className={styles.tabs} label={exp.company} />
        ))}
      </Tabs>
      {experienceData.map((exp, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Typography className={styles.workplacePosition}>
            {exp.position}{" "}
            <Link href={exp.link} className={styles.workplaceLink}>
              @ {exp.company}
            </Link>
          </Typography>
          <Typography className={styles.range}>{exp.range}</Typography>
          <ul>
            <Typography fontSize={18} marginBottom={1}>{exp.description}</Typography>
            {exp.details?.map((detail, i) => (
              <li key={i}>
                <Typography fontSize={18}>{detail}</Typography>
              </li>
            ))}
            <Typography fontSize={18} marginTop={1}>{exp.closing}</Typography>
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
}
