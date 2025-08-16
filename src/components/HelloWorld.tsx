// https://vcc-ui.vercel.app/docs/setup
// Setup Volvo: npm install vcc-ui --save
// npm install axios

import React from "react";
import { Block, Button } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

export const HelloWorld: React.FC = () => {
  const {cars} = useCars();

  console.log(cars)

  return (
    <Block extend={{padding: 20}}>
      {cars.map(car => 
      <CarCard key={car.id} car={car} />)}
    </Block>
  )
};
