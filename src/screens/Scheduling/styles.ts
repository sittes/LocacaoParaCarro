import styled, {css} from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface DateValueProps{
    selected: boolean;
}

export const Container = styled.View`

    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
      width:100%;
      height:325px;
      background-color: ${({theme}) => theme.colors.header};
      justify-content:center;
      padding:25PX;
      padding-top: ${getStatusBarHeight() + 5}px;
`;
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(30)}px;
    
`;
export const People = styled.Text`

`;
export const RentalPeriod = styled.View`
    width: 100%;
margin-top: 42;
flex-direction:row;
justify-content: space-between;
align-items: center;
`;
export const DateTitle = styled.Text`
       color: ${({theme}) => theme.colors.text};
       font-size: ${RFValue(15)}px;
       top:0px;
`;
export const DateValue = styled.Text<DateValueProps>`
       color: ${({theme}) => theme.colors.shape};
       font-size: ${RFValue(15)}px;

    ${({selected,theme}) =>!selected && css`
        border-bottom-width:1px;
        border-bottom-color: ${({theme}) => theme.colors.shape};
        padding-bottom:5px;
    `};
`;
export const DateInfo = styled.View`
    width: 30%;
 
`;
export const Statusbar = styled.View`
    width: 30%;
 
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle:{
        paddingBottom:24

     },
     showsVerticalScrollIndicator: false
})``; 

export const Footer = styled.View`
   padding: 24px;
  

  
`;


