// import React from 'react';
// //import Icon from 'react-native-vector-icons/AntDesign';
// import { BackButton } from '../../components/BackButton';
// import { ImageSlider } from '../../components/ImageSlider';
// import { Button } from "../../components/Button";
// import SpeedSvg from "../../assets/speed.svg";
// //import { View, Text } from 'react-native';
// import {CarDTO} from '../../dtosCarDTO';
// import {useNavigation,useRoute} from '@react-navigation/native';
// // import AccelerationSvg from "../../assets/acceleration.svg";
// // import ForceSvg from "../../assets/force.svg";
// // import GasolineSvg from "../../assets/gasoline.svg";
// // import ExchangeSvg from "../../assets/ exchange.svg";
// // import PeopleSvg from "../../assets/people.svg";

// import { Footer,Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Accessory } from './styles';
// //navigation.navigate('Scheduling');

// interface Params{
// 	car:CarDTO
// }

// export function CarDetails() {
    
// const navigation = useNavigation();

// const route = useRoute();
//   const {car} = route.params as Params;

//  function handleConfirmRental(){
//    navigation.navigate('Scheduling');
// }
// function handleBack(){
// 	navigation.goBack();
// }
//   return (
//     <Container>
//       <Header>
//         <BackButton onPress={handleBack} />
//       </Header>
//       <CarImages>
//         <ImageSlider
//           imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
//         />
//       </CarImages>

//       <Content>
//         <Details>
//           <Description>
//             <Brand>{car.brand}</Brand>
//             <Name>{car.name}</Name>
//           </Description>
//           <Rent>
//             <Period>{car.rent.period}</Period>
//             <Price>R${car.rent.price}</Price>
//           </Rent>
//         </Details>
      
//         <Acessories>
//             {
//               car.accessories.map(accessory => (
//                 <Accessory 
//                   key={accessory.type}
//                   name={accessory.name} 
//                   icon={SpeedSvg}/> 
//               ))
//             }
            
//           </Acessories>

          

        

//          <About>
//            Este e automóvel despostivo.surgiu do lendário touro de lide indultado na
//            na praça real maestranza de servilla. e um belissimo carro quem gostar de acelerar
//          </About>
       
//       </Content>
 
      
//       <Footer>
//         <Button title="Selecionar Periodo do Aluguel"  onPress={handleConfirmRental} />
//       </Footer>
  
      
     
//     </Container>
//   );
// }

























import React from 'react';
//import Icon from 'react-native-vector-icons/AntDesign';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from "../../components/Button";
import SpeedSvg from "../../assets/speed.svg";
import { View, Text,StyleSheet } from 'react-native';
import {CarDTO} from '../../dtosCarDTO';
import {useNavigation,useRoute} from '@react-navigation/native';
// import AccelerationSvg from "../../assets/acceleration.svg";
// import ForceSvg from "../../assets/force.svg";
// import GasolineSvg from "../../assets/gasoline.svg";
// import ExchangeSvg from "../../assets/ exchange.svg";
// import PeopleSvg from "../../assets/people.svg";

import { Footer,Container, Header, CarImages, Content, 
  Details, Description, Brand, Name, Rent, Period, 
  Price, About, Acessories } from './styles';
//navigation.navigate('Scheduling');

interface Params{
	car:CarDTO
}

export function CarDetails() {
    
const navigation = useNavigation();

const route = useRoute();
  const {car} = route.params as Params;

 function handleConfirmRental(){
   navigation.navigate('Scheduling',);
}
function handleBack(){
	navigation.goBack();
}
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R${car.rent.price}</Price>
          </Rent>
        </Details>
      
 
    
        <Acessories > {
        car.accessories.map(accessory => (
     
                 <View style={styles.quadrados} key={accessory.type}>
                      <SpeedSvg style={{left:18,top:5}} fill="#212121" width={40} height={40}></SpeedSvg>
                      <Text style={styles.texto}>{accessory.name}</Text>
                 </View>
                
               ))
             }</Acessories>
        
    
        {/* <Accessory >
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
        </Accessory>
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
        </Acessories>  */}
        <About>
          Este e automóvel despostivo.surgiu do lendário touro de lide indultado na
          na praça real maestranza de servilla. e um belissimo carro quem gostar de acelerar
        </About>
       
      </Content>
 
      
      <Footer>
        <Button title="Selecionar periodo do aluguel"  onPress={handleConfirmRental} />
      </Footer>
  
      
     
    </Container>
  );
}


const styles = StyleSheet.create({
  
  quadrados:{
    flex: 1,
    backgroundColor:'#b2b4b2',
    width:110,
    height:100,
    padding:18,
  
  },
  texto:{
    
    textAlign:'center',
  },
  


});










