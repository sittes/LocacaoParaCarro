import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export  const Container = styled(RectButton)`
    width:100%;
    height:126px;
    background-color: '#red';
    background-color:${({theme}) => theme.colors.shape};
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:24px;
    margin-bottom: 16px;
    
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  
   color:${({theme}) => theme.colors.text_detail};
   font-size: 20;
   text-transform: uppercase;
     
`;

export const Name = styled.Text`
       color:${({theme}) => theme.colors.title};
       font-size: 22;

`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;

`;

export const Rent = styled.View`
    margin-right: 24;
`;

export const Period = styled.Text`
     color:${({theme}) => theme.colors.title};
     font-size: 16;
     text-transform: uppercase;
`;

export const Price = styled.Text`
         color:${({theme}) => theme.colors.main};
     font-size: 20;
     text-transform: uppercase;
`;

export const Type = styled.View``;

export const CardImage = styled.Image`
    width: 167px;
    height: 85px;
`;


