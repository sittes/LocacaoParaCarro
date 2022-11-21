import React from 'react';
import { colors } from 'react-native-elements';
//import { Title } from 'react-native-paper';
import {Container,Title} from './styles';
import {useTheme} from 'styled-components'

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}

export function ButtonAlugado({
    title,
    color,
    onPress
}: Props ){
   const theme = useTheme();

	return(
	<Container color={color ? color : theme.colors.main} onPress={onPress}>
      
        <Title>{title}</Title>
       
    </Container>
);
}



// interface Props {
//     title: string;
//     color?: string;
// }

// export function ButtonAlugado({
//     title,
//     color,
//     ...rest
// }: Props ){
   
// 	return(
// 	<Container {...rest} color={color}>
      
//         <Title>{title}</Title>
       
//     </Container>
// );
// }