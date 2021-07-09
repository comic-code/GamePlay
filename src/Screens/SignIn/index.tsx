import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonIcon from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={IllustrationImg}
        resizeMode="stretch"/>
  
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e Organize suas {'\n'}
          jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos jogar seus games {'\n'}
          favoritos com seus amigos 
        </Text>
  
        <ButtonIcon onPress={handleSignIn} title="Entrar com o Discord" />
  
      </View>


    </View>
  );
}
