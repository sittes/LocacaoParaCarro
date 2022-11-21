// import React from 'react';
// import Icon from 'react-native-vector-icons/AntDesign'
// import {Container} from './styles';

// export function BackButtonTwo(){
// 	return(
// 	<Container>
      
//           <Icon name="arrowleft" size={25} color="#ffffff"/>
       
//     </Container>
// );
// }

import React from 'react';
import { colors } from 'react-native-elements';
//import { Title } from 'react-native-paper';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
import {useTheme} from 'styled-components'

interface Props {
  
    color?: string;
    onPress: () => void;
}

export function BackButtonTwo({
    
    color,
    onPress
}: Props ){
   const theme = useTheme();

	return(
	<Container color={color ? color : theme.colors.main} onPress={onPress}>
      
      <Icon name="arrowleft" size={25} color="#ffffff"/>
       
    </Container>
);
}

