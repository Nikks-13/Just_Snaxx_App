import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS} from '../theme/Theme';

const EmptyListAnimation = ({title}: any) => {
  return (
    <View style={styles.emptycartcontainer}>
      <LottieView
        style={styles.lottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default EmptyListAnimation;

const styles = StyleSheet.create({
  emptycartcontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: COLORS.primaryGreenHex,
    fontSize: 30,
    fontWeight: '800',
  },
  lottieStyle: {
    height: 500,
  },
});
