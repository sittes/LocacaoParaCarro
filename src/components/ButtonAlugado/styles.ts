import styled from 'styled-components/native';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';
//import {RFValue} from 'react-native-responsive-fontsize';


interface ButtonProps extends RectButtonProps{
	color:string
}

export const Container = styled(RectButton)<ButtonProps>`
    width:100%;
    align-items: center;
    justify-content: center;
`;

// export const Container = styled.View`
//     width:100%;
//     align-items: center;
//     justify-content: center;
// `;

export const Title = styled.Text`
  
  background-color: ${({theme}) => theme.colors.title};
  padding:10px;
  top: 15px;
  color: ${({theme}) => theme.colors.backgroud_primary};
  margin-bottom: 40px;
  text-align: center;
  font-size:20px;
  border-radius: 1px;
    
`;

// font-size: ${RFValue(15)}px;





/* import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps extends ReactButtonProps{
	color:string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width:100%;
    align-items: center;
    justify-content: center;
    background-color:${({color,theme}) => color ? color : theme.colors.main}
`;

export const Title = styled.Text`
  
  background-color: ${({theme}) => theme.colors.main};
  padding:10px;
  top: 15px;
  color: ${({theme}) => theme.colors.backgroud_primary};
  margin-bottom: 40px;
  text-align: center;
  font-size:20px;
  width:80%;
    
`; */