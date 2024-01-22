import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title: string;
  BackHandler: any;
}
const PaymentHeader: React.FC<HeaderBarProps> = ({title, BackHandler}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={BackHandler}>
        <Image
          source={require('../assets/icons/close.png')}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>

      <Text style={styles.HeaderText}>{title}</Text>
      <Text
        style={{
          width: 30,
          height: 30,
        }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: 28,
    padding: 28,
    paddingHorizontal: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: 20,
    color: COLORS.primaryWhiteHex,
  },
});

export default PaymentHeader;
