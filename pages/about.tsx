import React from "react";
import { Button, Typography } from "antd";

const { Text, Link } = Typography;

function about() {
  return (
    <div>
      <Text>About</Text>
      <Button>
        <Link href="/">about</Link>
      </Button>
    </div>
  );
}

export default about;
