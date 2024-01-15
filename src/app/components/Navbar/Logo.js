import styles from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <Image src="/logo/logo.png" alt="Logo" width={144} height={50} priority />
    </Link>
  );
}
