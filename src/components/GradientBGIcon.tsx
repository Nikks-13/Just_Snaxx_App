import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/Theme';

const GradientBGIcon = () => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        style={styles.LinearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <Image
          source={require('../assets/icons/menu.png')}
          style={{
            tintColor: COLORS.primaryGreenHex,
            width: 22,
            height: 22,
            resizeMode: 'contain',
          }}></Image>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradient: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Images: {
    height: 16,
    width: 16,
    tintColor: COLORS.primaryGreenHex,
  },
});
export default GradientBGIcon;
