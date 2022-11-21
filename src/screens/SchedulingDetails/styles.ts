import {getBottomSpace,getStatusBarHeight} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.background_secondary};
`; 

export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   position:absolute;
   margin-top: ${getStatusBarHeight() + 18}px;
   margin-left:24px;
`; 
export const CarImages = styled.View`
     margin-top: ${getStatusBarHeight() + 12}px;
`; 

export const Content = styled.ScrollView.attrs({
	contentContainerStyle:{
	padding:24,
	alignItems: 'center',
     },
     showsVerticalScrollIndicator: false
})``; 

export const Details = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    //margin-top:38px;
   
`;

export const Description = styled.View``;
// isso vai no brand  font-family: ${({theme}) => theme.fonts-secondary_500};

export const Brand = styled.Text`

    color: ${({theme}) => theme.colors.text_detail};
    font-size:${RFValue(12)}px;
    text-transform:uppercase;     
`;

// isso vai no Name  font-family: ${({theme}) => theme.title};

export const Name = styled.Text`

    color: ${({theme}) => theme.colors.text_detail};
    font-size:${RFValue(20)}px;
    text-transform:uppercase; 
    color: '#000';
`;

export const Rent = styled.View``;

// isso vai no period  font-family: ${({theme}) => theme.fonts-secondary_500};
export const Period = styled.Text`
    color: ${({theme}) => theme.colors.text_detail};
    font-size:${RFValue(10)}px;
    text-transform:uppercase; 
`;

// isso vai no price  font-family: ${({theme}) => theme.fonts-secondary_500};
export const Price = styled.Text`
    color: ${({theme}) => theme.colors.main};
    font-size:${RFValue(20)}px;
    text-transform:uppercase; 
`;

// isso vai no price  font-family: ${({theme}) => theme.primary_400};
export const About = styled.Text`
     font-size:${RFValue(15)}px;
     text-align: justify;
     margin-top:80px;
     line-height:${RFValue(25)}px;
    
`;

export const Acessories = styled.View`
     width:100%;
     justify-content: space-around;
     top:40;
    flex-direction: row;

`;
export const Acessorios = styled.View`
     width:100%;
     justify-content: space-around;
     top:40;
     flex-direction: row;

`;

export const Footer = styled.View`
    background-color: ${({theme}) => theme.colors.background_success};
    padding: 4px 24px ${getBottomSpace() + 1}px;
`;
export const RentalPeriod = styled.View`
 margin-top: 70px;
 width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: 16px;

`;

export const CalendarIcon = styled.View`
    width: 38px;
    height: 38px;
    //background-color: ${({ theme }) => theme.colors.success};
    justify-content: center;
    align-items: center;
   
`;
export const DateInfo = styled.View`
  
`;
export const DateTitle = styled.Text`
   
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const DateValue = styled.Text`
       
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
     width: 100%;
  margin-top: 16px;
`;

// RentalPriceLabel font-family: ${({ theme }) => theme.fonts.primary_500};
export const RentalPriceLabel = styled.Text`

  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;
export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

 //RentalPriceQuota font-family: ${({ theme }) => theme.fonts.primary_500};
export const RentalPriceQuota = styled.Text`
 
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

//RentalPriceTotal font-family: ${({ theme }) => theme.fonts.secondary_500};
export const RentalPriceTotal = styled.Text`

  color: ${({ theme }) => theme.colors.sucess};
  font-size: ${RFValue(24)}px;
`;


// <RentalPriceLabel>TOTAL</RentalPriceLabel>
// <RentalPriceDetails>
//   <RentalPriceQuota>{`R$ ${car.price} x${dates.length} dia`}</RentalPriceQuota>
//   <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
// </RentalPriceDetails>









