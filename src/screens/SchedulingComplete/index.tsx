import React from 'react';
//import {Dimensions} from 'react-native';
import Verificacion from '../../assets/verificacion';
import  {ButtonAlugado}  from "../../components/ButtonAlugado";
//import  {Button}  from "../../components/Button";
//import {useWindowDimensions} from 'react-native';
import {Container,Content,Title,Message,Footer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
//import {  Text } from 'react-native';



//const {width} = Dimensions.get('window');

export function SchedulingComplete(){
	// const {width} = useWindowDimensions();
	const theme = useTheme();
	const navigation = useNavigation();

	function handleConfirmRental(){
		navigation.navigate('Home');

	  }
	
	


	return(
	   <Container>
	
			<Content>
				<Verificacion  fill="#f7f5f5" width={150} height={150}></Verificacion>
				<Title>Carro alugado!</Title>
	    		<Message>
					agora você so precisa ir 
					até{'\n'}a concessionária da ALUGUEIS{'\n'}
					pegar o seu automóvel.
	    		</Message>
				
				<Footer>
 					<ButtonAlugado title="OK" onPress={handleConfirmRental} /> 
      			</Footer>
			</Content>
	   </Container>
	);

}

//	  {/* <Verificacion width={width}/> */}