// https://vcc-ui.vercel.app/docs/setup
// Setup Volvo: npm install vcc-ui --save
// npm install axios

import React from "react";
import { Block, Button } from "vcc-ui";
import { useCars } from "../hooks/useCars";

export const HelloWorld: React.FC = () => {
  const {} = useCars();

  return (
    <Block extend={{padding: 20}}>
      <Button>Click me!</Button>
    </Block>
  )
};
