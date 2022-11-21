import React from 'react';
import { Container, Header, Title, RentalPeriod, DateTitle, DateValue, DateInfo, Content, Footer } from './styles';
//import {BackButton} from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { BackButtonTwo } from '../../components/BackButtonTwo';
import { Button } from "../../components/Button";
import { Caledar } from "../../components/Caledar";
//import SpeedSvg from '../../assets/speed.svg';
import Arrow from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
//<SpeedSvg style={{left:11,top:-7}} fill="#212121" width={40} height={40}></SpeedSvg>




 

export function Scheduling() {
	const theme = useTheme();

	const navigation = useNavigation();

	function handleConfirmRental(){
		navigation.navigate('SchedulingDetails');
	  }
	  function handleBack(){
		navigation.goBack();
	}

	return (
		<Container>
			<Header>
				<StatusBar
					barStyle="light-content"
					translucent
					backgroundColor="transparent"
				/>
				< BackButtonTwo onPress={handleBack} />
				<Title>
					Escolha uma {'\n'}
					data de início e {'\n'}
					fim do aluguel
				</Title>

				<RentalPeriod>
					<DateInfo>
						<DateTitle  >De</DateTitle>
						<DateValue selected={false}>
							05/11/2022
						</DateValue>
					</DateInfo>
					 <Arrow style={{ left: -10, }} fill="#ffffff" width={20} height={20}></Arrow> 
					<DateInfo>
						<DateTitle fill="#ffffff" width={70} height={20}>Ate</DateTitle>
						<DateValue selected={false} fill="#ffffff" width={70} height={20}>
							05/11/2022
						</DateValue>
					</DateInfo>
				</RentalPeriod>
			</Header>
			<Content>
				<Caledar />
			</Content>
			<Footer>
			<Button title="Confirmar"  onPress={handleConfirmRental} />
			</Footer>

		</Container>


	);
}

// import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();

//  function handleConfirmRental(){
//    navigation.navigate('Scheduling');
// }

//  <Button title="Selecionar Periodo do Aluguel"  onPress={handleConfirmRental} />


{/* <View style={styles.imges}>
<Image style={{width:110}}  
source = {require('./src/assets/LogoCar.png')}/>
<View style={styles.letras}>
 <Text style={{fontSize:25, color: "white",}}>
	 Total de 12 carros
 </Text>
</View>
</View>
</ThemeProvider>
);
}

//     <Image style={{width:110}}  
//source = {require('./src/assets/LogoCar.png')}/>
const styles = StyleSheet.create({
imges: {
top: 5,
position: "absolute",
width: 520,
height: 120,
left: 40,
},


letras: {
fontSize: 352,
left: 130,
top:-50,

}
}); */}