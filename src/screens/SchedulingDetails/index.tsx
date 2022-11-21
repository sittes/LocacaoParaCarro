import React from 'react';
//import Icon from 'react-native-vector-icons/AntDesign';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from "../../components/Button";
import SpeedSvg from "../../assets/speed.svg";
import Icon from 'react-native-vector-icons/AntDesign'
//import calendar from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize'
import { View, Text} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import { Footer,Container, Header, CarImages, Content, Details, 
  Description, Brand, Name, Rent, Period, Price, About, Acessories, Acessorios,RentalPeriod,
  CalendarIcon,DateInfo,DateValue,DateTitle,RentalPrice,
  RentalPriceLabel,RentalPriceDetails,RentalPriceQuota,RentalPriceTotal} from './styles';

export function SchedulingDetails() {

  const theme = useTheme();
  const navigation = useNavigation();

	function handleConfirmRental(){
		navigation.navigate('SchedulingComplete');
	  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => ('')} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$580</Price>
          </Rent>
        </Details>
        <Acessorios >
          <View style={{backgroundColor:'#eae3e3',right:17,padding:8,width:110}}>
            <SpeedSvg style={{left:25,top:5}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:15,top:8}}>
            380km/h
            </Text>
          </View>
          <View style={{backgroundColor:'#eae3e3',left:2,padding:8,width:110}}>
            <SpeedSvg style={{left:25,top:5}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:35,top:8}}>
            3.2
            </Text>
          </View>
          <View style={{backgroundColor:'#eae3e3',left:17,padding:20,width:110}}>
            <SpeedSvg style={{left:11,top:-7}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:10,top:-3}}>
            800 hp
            </Text>
          </View>
        </Acessorios>
        <Acessories>
        <View style={{backgroundColor:'#eae3e3',right:17,padding:8,width:110,top:10}}>
            <SpeedSvg style={{left:25,top:5}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:15,top:8}}>
            Gasolina
            </Text>
          </View>
          <View style={{backgroundColor:'#eae3e3',left:2,padding:8,width:110,top:10}}>
            <SpeedSvg style={{left:25,top:5}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:30,top:8}}>
            Auto
            </Text>
          </View>
          <View style={{backgroundColor:'#eae3e3',left:17,padding:20,width:110,top:10}}>
            <SpeedSvg style={{left:11,top:-7}} fill="#212121" width={40} height={40}></SpeedSvg>
            <Text style={{left:4,top:-3}}>
            2 Pessoas
            </Text>
          </View>
          
        </Acessories>
        <RentalPeriod >
              <CalendarIcon>
              <Icon name="calendar" size={RFValue(20)} color={theme.colors.text} color="#000"/> 
              </CalendarIcon>
              <DateInfo >
                  
                <DateTitle>De</DateTitle>
                <DateValue>07/11/2022</DateValue>
              </DateInfo>
         
              <CalendarIcon>
              <Icon name="right" size={RFValue(20)} color={theme.colors.text} color="#000"/> 
              </CalendarIcon>
              <DateInfo>
                  
                <DateTitle>De</DateTitle>
                <DateValue>07/11/2022</DateValue>
              </DateInfo>
          </RentalPeriod>
          <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900 </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
       
      </Content>
 
      
      <Footer>
      <Button title="Alugar Agora" color={theme.colors.sucess}  onPress={handleConfirmRental} />
      </Footer>
  
      
     
    </Container>
  );
}

//,backgroundColor:'blue'





{/* <View> 
<Text>
  NOME _QUE_TU_QUER
</Text>
  <SpeedSvg fill="#212121" width={35} height={35}></SpeedSvg>
</View>
<View> 
<Text>
  NOME _QUE_TU_QUER
</Text>
  <SpeedSvg fill="#212121" width={35} height={35}></SpeedSvg>
</View>
<View> 
<Text>
  NOME _QUE_TU_QUER
</Text>
  <SpeedSvg fill="#212121" width={35} height={35}></SpeedSvg>
</View> */}