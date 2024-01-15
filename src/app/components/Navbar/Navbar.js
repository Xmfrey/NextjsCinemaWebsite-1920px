"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./Logo";
import UpArrowScroll from "./UpArrowScroll";
import FavoritesIcon from "./icons/FavoritesIcon";
import HomeIcon from "./icons/HomeIcon";
import MoviesIcon from "./icons/MoviesIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";
import SeriesIcon from "./icons/SeriesIcon";
import styleIcon from "./icons/icons.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/search" ? styleIcon.active : ""
              }`}
              href="/search"
            >
              <SearchIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/" ? styleIcon.active : ""
              }`}
              href="/"
            >
              <HomeIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/series" ? styleIcon.active : ""
              }`}
              href="/series"
            >
              <SeriesIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/movies" ? styleIcon.active : ""
              }`}
              href="/movies"
            >
              <MoviesIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/favorites" ? styleIcon.active : ""
              }`}
              href="/favorites"
            >
              <FavoritesIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                pathname === "/profile" ? styleIcon.active : ""
              }`}
              href="/profile"
            >
              <ProfileIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <UpArrowScroll />
    </div>
  );
};

export default Navbar;
