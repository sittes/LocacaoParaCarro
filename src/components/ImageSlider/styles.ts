import styled from 'styled-components/native';
import{Dimensions} from 'react-native';

interface ImageIndexeProps{
    active: boolean;
}

export const Container = styled.View`
   width:100%;
`;
export const ImageIndexes = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
`;
export const ImageIndex = styled.View<ImageIndexeProps>`
    width:10px;
    height:10px;
    background-color: ${({theme, active}) => active ? theme.colors.title : theme.colors.shape};
    top:10px;
    margin-left:8px;
    border-radius:8px;
`;


export const CardImageWrappe = styled.View`
    width: ${Dimensions.get('window').width}px;
    height:132px;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.Image`
    width:280px;
    height:132px;
`;
