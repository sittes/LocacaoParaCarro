import {getBottomSpace,getStatusBarHeight} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from "styled-components/native";


export const Container = styled.View`

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
    margin-top:38px;
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
    color: ${({theme}) => theme.colors.success};
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

export const Acessories = styled.Text`
    
    justify-content:space-between;
    flex-direction: row;
    align-self: center;
    
  
`;
export const Footer = styled.View`
    width:100%;
    background-color: ${({theme}) => theme.colors.background_primary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
`;














