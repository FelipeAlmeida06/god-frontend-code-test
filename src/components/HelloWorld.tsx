// https://vcc-ui.vercel.app/docs/setup
// Setup Volvo: npm install vcc-ui --save
// instalar: npm install axios

import React, { useState } from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";

import PaginationDesktop from "./PaginationDesktop";
import PaginationMobile from "./PaginationMobile";

import styles from "../../public/css/home.module.css"   // estilos

export const HelloWorld: React.FC = () => {
  const {cars} = useCars();
  const [activeIndex, setActiveIndex] = useState(-1);       // botoes pequeno (dots) para navegação mobile -> nenhum dot selecionado no início

  // Funções de navegação entre os cards:
  // onClickLeft volta um card para trás
  const onClickLeft = () => {
    const cardList = document.getElementById("card-list");
    if (!cardList) return;

    const card = cardList.firstElementChild as HTMLElement;
    const cardSize = card?.clientWidth ?? 0;
    const scrollPosition = cardList.scrollLeft;

    // só anda para esquerda se não estiver no início
    if (scrollPosition > 0) {
      cardList.scrollTo({
        left: scrollPosition - cardSize,
        behavior: "smooth"
      });
    }
  }

  // onClickRight vai um card para frente
  const onClickRight = () => {
    const cardList = document.getElementById("card-list");
    if (!cardList) return;

    const card = cardList.firstElementChild as HTMLElement;
    const cardSize = card?.clientWidth ?? 0;
    const scrollPosition = cardList.scrollLeft;
    const scrollSize = cardList.scrollWidth;
    const visibleSize = cardList.clientWidth;

    // só anda para direita se não estiver no final
    if (scrollPosition + visibleSize < scrollSize) {
      cardList.scrollTo({
        left: scrollPosition + cardSize,
        behavior: "smooth"
      });
    }
  }

  const onClickMobile = (index: number) => {
    setActiveIndex(index);

    const cardList = document.getElementById("card-list");
    if (!cardList) return;

    const card = cardList.firstElementChild as HTMLElement;
    const cardSize = card?.clientWidth ?? 0;

    cardList.scrollTo({
      left: cardSize * index,
      behavior: "smooth"
    });
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>

      <Spacer />
      
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car => 
        <CarCard key={car.id} car={car} />)}
      </div>

      <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight}/>

      <PaginationMobile onClick={onClickMobile} total={cars.length} activeIndex={activeIndex} />
    </div>
  )
};

// navegação mobile entre os cards