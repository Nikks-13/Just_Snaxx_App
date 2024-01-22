import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';
import LottieView from 'lottie-react-native';

const PopUpAnimation = ({style, source}: any) => {
  return (
    <View style={styles.animation}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
});
export default PopUpAnimation;
