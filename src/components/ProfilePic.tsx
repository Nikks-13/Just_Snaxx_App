import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/usericon/man.png')}
        style={styles.Images}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ImageContainer: {
    height: 36,
    width: 36,
    borderRadius: 12,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Images: {
    height: 36,
    width: 36,
  },
});
export default ProfilePic;
