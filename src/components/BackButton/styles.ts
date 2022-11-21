//import styled from 'styled-components/native';
//import {BorderlessButton} from 'react-native-gesture-handler';
//export const Container = styled(BorderlessButton)``;

// import styled from 'styled-components/native';

// export const Container = styled.View`
//     flex: 1;
// `;




 import styled from 'styled-components/native';
 //import {BorderlessButton} from 'react-native-gesture-handler';
 import {RectButton,RectButtonProps,TouchableOpacity} from 'react-native-gesture-handler';
//import {RFValue} from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps{
	color:string,
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
     flex: 1;
`;
