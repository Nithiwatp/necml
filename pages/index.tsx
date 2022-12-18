import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button, Typography } from "antd";

const { Text, Link } = Typography;

function Home() {
  return (
    <div>
      <Text>Welcome to Next.js!</Text>
      <Button>
        <Link href="/about">about</Link>
      </Button>
    </div>
  );
}

export default Home;
