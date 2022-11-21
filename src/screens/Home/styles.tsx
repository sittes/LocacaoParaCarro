import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';
import {FlatList} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.backgroundColor_primary};
`;

//background-color:${({theme})=>theme.colors.main}

export const Header = styled.View`
width: 100%;
height:113px;
background-color:${({ theme }) => theme.colors.header};`;


export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
    contentContainerStyle:{
        padding: 24
    },
    showsVerticalScrollIndicator:false
})``;

export const imges = styled.View`
  top: 5;
        position: "absolute";
        width: 520;
        height: 120;
        left: 40;`;

//  export const Letras = styled.View`
//     font-Size: 352;
//       left: 130;
//       top:-20`;




