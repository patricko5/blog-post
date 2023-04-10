import BlogPostOne from "../components/BlogPostOne";
import BlogPostTwo from "../components/BlogPostTwo";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("tab2");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div
          className={`${styles.item}
        ${selectedTab === "tab1" ? styles.actionItem : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          <h1>Blog Post One</h1>
        </div>

        <div
          className={`${styles.item}
        ${selectedTab === "tab2" ? styles.actionItem : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          <h1>Blog Post Two</h1>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          {selectedTab === "tab1" && <BlogPostOne />}
          {selectedTab === "tab2" && <BlogPostTwo />}
        </div>
      </div>
    </div>
  );
}
