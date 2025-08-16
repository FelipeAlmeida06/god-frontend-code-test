// https://vcc-ui.vercel.app/docs/setup
// Setup Volvo: npm install vcc-ui --save
// instalar: npm install axios

import React from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";

import styles from "../../public/css/home.module.css"   // estilos

export const HelloWorld: React.FC = () => {
  const {cars} = useCars();

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>

      <Spacer />
      
      <div className={styles.cardsWrapper}>
        {cars.map(car => 
        <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  )
};
