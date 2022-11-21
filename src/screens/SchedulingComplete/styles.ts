
import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';


//export const Container = styled(ReactButton)`

export const Container = styled.View`
 
  background-color: ${({theme}) => theme.colors.header};
  padding-top:1px;
  width: 100%;
  height: 100%;
  

`;
export const Content = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;

`;

export const Title = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size:${RFValue(30)}px;
margin-right: 40px;
`;
export const Message = styled.Text`
color: ${({theme}) => theme.colors.shape};
font-size:${RFValue(15)}px;
margin-top: 10px;
line-height: 25px;
`;
export const Footer = styled.View`
margin-top: 55px;
color: 'black';
`;





