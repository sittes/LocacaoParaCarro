import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import {Container,Details,Brand,Name,About,Rent,Period,Price,Type,CardImage,CarList} from './style';
import {CarDTO} from '../../dtos/CarDTO';
import {Image,StyleSheet} from 'react-native';

// interface carData{
//     brand: string;
// 	name: string;
// 	rent:{
// 	period:string;
// 	price: number;
// },
//  thumbnail: string;
// }

interface Props extends RectButtonProps{
	data: CarDTO;
}

export function Car({data, ...rest} : Props) {
    return (
    <Container {...rest}>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>
            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>
                <Type>
                <Image style={{width:40,height:35}}  
                    source = {require('../../assets/gasolina.png')}/>
                </Type>
            </About>
        </Details>

        <CardImage
        source={{uri: data.thumbnail}}
        resizeMode="contain"/>
        
    </Container>
  );
}

//https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png
