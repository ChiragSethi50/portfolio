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
        <ul>
          <Typography fontSize={18}>
            As a Full Stack Developer, I contribute to the development and maintenance of
            production-level software solutions for FUNIBER's global educational platforms. My
            responsibilities include:
            <li>
              Writing and maintaining scalable, efficient, and clean production code across various
              web applications.
            </li>
            <li>
              Developing frontend part of application using Next.js along with Backend For Frontend
              Architecture.
            </li>
            <li>
              Collaborating with backend teams to integrate APIs and business logic built with
              Node.js/NestJS.
            </li>
            <li>
              Participating in system design discussions, applying architectural best practices and
              design principles.
            </li>
            <li>
              Debugging, testing, and optimizing features to ensure performance, security, and
              reliability.
            </li>
            <li>
              Working closely with cross-functional teams to deliver high-impact solutions on
              schedule.
            </li>
            While my primary focus is frontend development, I actively contribute to backend
            development and have a strong understanding of full-stack workflows.
          </Typography>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography className={styles.workplacePosition}>
          Full Stack Developer Intern{" "}
          <Link href={LINKS.zenmonk} className={styles.workplaceLink}>
            @ Zenmonk
          </Link>
        </Typography>
        <Typography className={styles.range}>January 2024 - January 2025</Typography>
      </TabPanel>
    </Box>
  );
}
