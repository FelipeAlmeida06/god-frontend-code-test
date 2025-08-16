// instalar: npm i @volvo-cars/css

import { CardContent, Text, Spacer, Card, Block, Flex, Row, Link } from "vcc-ui"
import { Car } from "../types/car.interface";
import Image from "next/image";

import styles from "../../public/css/components/carCard.module.css"   // estilos

interface CardProps {
    car: Car
}

export function CarCard(props: CardProps) {
    return (
        <div className={styles.cardWrapper}>
            
            <Text variant="bates" subStyle="emphasis">{props.car.bodyType}</Text>

            <Flex extend={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                margin: 0
            }}>
                <Text variant="amundsen" extend={{
                    margin: 0,
                    padding: 0
                }}>
                {props.car.modelName}</Text>

                <Spacer />

                <Text variant="bates" subStyle="inline-link" extend={{
                    margin: 0,
                    padding: 0
                }}>
                {props.car.modelType}</Text>
            </Flex>

            <Spacer />

            <Image
                src={props.car.imageUrl}
                alt={props.car.modelName}
                width={250}     // 400  // 300
                height={200}>  
            </Image>

            <Spacer />

            <Flex extend={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Link href="https://www.volvocars.com/" target="_blank" arrow="right">LEARN</Link>
                <Link href="https://www.volvocars.com/" target="_blank" arrow="right">SHOP</Link>
            </Flex>
        </div>
    )
}

export default Card;


// href="https://www.volvocars.com/"
// <Text variant="amundsen">{props.car.modelName}</Text>
//<Text variant="bates" subStyle="inline-link">{props.car.modelType}</Text>
//<Text>{props.car.imageUrl}</Text>


// <Card href={"/learn/" + props.car.id}>
// </Card>