import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.PriceFooter}>
          <View style={styles.PriceContainer}>
            <Text style={styles.priceTitle}>Price</Text>
            <Text style={styles.priceSubTitle}>
              {price.currency}
              <Text style={styles.priceTag}> {price.price}</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.PayButton}
            onPress={() => {
              buttonPressHandler();
            }}>
            <Text style={styles.ButtonTitle}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    bottom: 20,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  PriceFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  PriceContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  priceTitle: {
    fontSize: 22,
    color: COLORS.secondaryLightGreyHex,
    textAlign: 'center',
    fontWeight: '500',
  },
  priceSubTitle: {
    color: COLORS.primaryGreenHex,
    fontSize: 26,
    fontWeight: '700',
  },
  priceTag: {
    color: 'white',
  },
  PayButton: {
    backgroundColor: COLORS.primaryGreenHex,
    borderRadius: 24,
  },
  ButtonTitle: {
    color: 'white',
    fontSize: 26,
    padding: 20,
    width: 250,
    textAlign: 'center',
    fontWeight: '800',
  },
});

export default PaymentFooter;
