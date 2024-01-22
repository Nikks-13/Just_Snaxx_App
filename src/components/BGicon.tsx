import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface BGiconProps {
  BGColor: string;
}
const BGicon: React.FC<BGiconProps> = ({BGColor}) => {
  return (
    <View style={[styles.IconBg, {backgroundColor: BGColor}]}>
      <Image
        source={require('../assets/icons/plus.png')}
        style={{
          tintColor: 'black',
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  IconBg: {
    height: 29,
    width: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default BGicon;
