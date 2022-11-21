import React from 'react';
import {Calendar as CustomCalendar,LocaleConfig} from 'react-native-calendars';
import {Feather} from 'react-native-vector-icons/AntDesign';
//import { View } from 'react-native';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
	monthNames: [
	  'Janeiro',
	  'Fevereiro',
	  'Março',
	  'Abril',
	  'Maio',
	  'Junho',
	  'Julho',
	  'Agosto',
	  'Setembro',
	  'Outubro',
	  'Novembro',
	  'Dezembro'
	],
	monthNamesShort: ['Jan', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Otu.', 'Nov.', 'Dez.'],
	dayNames: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
	dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
	today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'pt-br';


export function Caledar(){
const theme = useTheme();


	return(
		
	<CustomCalendar 


	headerStyle={{
	    backgroundColor: theme.colors.background_secondary,
	    borderWidth:0.5,
          borderBottomColor:theme.colors.text_detail,
	    paddingBottom:10,
          marginBottom:10,
}}

	theme={{
		textDayHeaderFontSize:10,
		textMonthFontSize: 20,
		monthTextColor:theme.colors.title,
		arrowStyle:{
		marginHorizontal:-15
	}
	}}
	
		firstDay={1}
		//  minDate={new Date()}
	/>
	

);
}


// renderArrow={( direction ) =>
// 	<Feather
// 	size={24}
// 	color={theme.colors.text}
// 	name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
// 	/>
	
// }