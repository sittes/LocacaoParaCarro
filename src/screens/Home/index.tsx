import React,{useEffect, useState} from 'react';
//import { SvgXml } from 'react-native-svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import {Container,Header,CarList} from './styles';
import { StatusBar,Image,StyleSheet,View,Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
//import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export  function Home(){
    const [cars, setCars] = useState<CarDTO[]>([]);
    const[loading, setLoading] = useState(true);
    
const navigation = useNavigation()

    function handleCarDetails(car:CarDTO){
        navigation.navigate('CarDetails',{car});
    }

    useEffect(() => {
        async function getLista() {
         try{
            const response = await api.get('/cars');
            setCars(response.data);
	}catch (error){
        console.log(error);
            }finally{
                setLoading(false)
            }
	}
        getLista();
    }, []);

    return(
        <Container>
            <Header>
            <StatusBar
               barStyle={"light-content"}
               translucent
               backgroundColor="transparent"/>  
        <View >
            <View >
            <Image style={{width:110,top:15}}  
                source = {require('../../assets/LogoCar.png')}
                resizeMode="contain"/>
              <Text style={{fontSize:20, color: "white",top:-35,left:150}}>
                  Total de 12 carros 
              </Text>
            </View>
        </View>
            </Header>
            {loading ? <Load/> :
             <CarList
                data={cars}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
             <Car data={item} onPress={() => handleCarDetails(item)}/>}/>
            }
  


        </Container>
    );
}

{/* <Car data={item} onPress={ handleCarDetails}/>}/> */}

