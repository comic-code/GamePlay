import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Image style={styles.image}
        source={IllustrationImg}
        resizeMode="stretch"/>
  
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos jogar seus games {`\n`}
          favoritos com seus amigos 
        </Text>
  
        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7}/>
    
      </View>


    </View>
  );
}
