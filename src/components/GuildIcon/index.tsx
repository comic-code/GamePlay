import React, { useEffect, useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Image } from 'react-native';

import { styles } from "./styles";

export default function GuildIcon() {
  const uri = 'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj'

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}