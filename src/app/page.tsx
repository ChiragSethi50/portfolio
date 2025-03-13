import Image from "next/image";
import styles from "./page.module.css";
import { Stack } from "@mui/material";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: 100,
          padding: "10px",
          borderRadius: "8px",
          zIndex: 9999,
        }}
        gap={2}
      >
        <Link href="http://www.linkedin.com/in/chirag-sethi50" target="_blank" color="#a8b2d1">
          <Image alt="" src={LinkedinIcon} width={24} height={24} color="#a8b2d1" />
        </Link>

        <Link href="https://github.com/ChiragSethi-1153" target="_blank" color="#a8b2d1">
          <Image alt="" src={GithubIcon} width={24} height={24} color="#a8b2d1" />
        </Link>

        <Link href="https://www.instagram.com" target="_blank" color="#a8b2d1">
          <Image alt="" src={InstagramIcon} width={24} height={24} color="#a8b2d1" />
        </Link>

        <hr
          style={{
            display: "block",
            width: "1px",
            height: "90px",
            margin: "0px auto",
            background: "#a8b2d1 !important",
          }}
        />
      </Stack>
    </div>
  );
}
