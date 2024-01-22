import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/Theme';
import {Image} from 'react-native';

interface PaymentMethodProps {
  paymentMode: string;
  name: string;
  icon: ImageProps;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
}) => {
  return (
    <View
      style={[
        styles.paymentCard,
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryGreenHex
              : COLORS.primaryBlackRGBA,
        },
      ]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBox}>
        <View style={styles.rows}>
          <Image
            source={icon}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.nametitle}>{name}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCard: {
    borderWidth: 2,
    borderRadius: 20,
  },
  CartItemLinearGradient: {},
  LinearGradientBox: {borderRadius: 20},
  rows: {
    padding: 14,
    flexDirection: 'row',
    gap: 20,
  },
  nametitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
export default PaymentMethod;
