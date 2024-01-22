import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/Theme';

interface CartItemProps {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  category: string;
  prices: any;
  type: string;
  incrementCartItemQuantity: any;
  decrementCartItemQuantity: any;
}
const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  category,
  prices,
  type,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
}) => {
  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemLinearGradient}>
          <View style={styles.CartItemRow}>
            <Image source={imagelink_square} style={styles.CartItemImage} />
            <View style={styles.CartItemInfo}>
              <View>
                <Text style={styles.CartItemTitle}>{name}</Text>
                <Text style={styles.CartItemSubtitle}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.CartItemTypeContainer}>
                <Text style={styles.CartItemTypeText}>{type}</Text>
              </View>
            </View>
          </View>

          {prices.map((data: any, index: any) => (
            <View
              key={index.toString()}
              style={styles.CartItemSizeRowContainer}>
              <View style={styles.CartItemSizeValueContainer}>
                <View style={styles.SizeBox}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize: 18,
                        fontWeight: '700',
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={styles.SizeCurrency}>
                  {data.currency}
                  <Text style={styles.SizePrice}> {data.price}</Text>
                </Text>
              </View>
              <View style={styles.CartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    decrementCartItemQuantity(id, data.size);
                  }}>
                  <Image
                    source={require('../assets/icons/minus.png')}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                    }}></Image>
                </TouchableOpacity>
                <View style={styles.CartItemQuantityContainer}>
                  <Text style={styles.CartItemQuantityText}>
                    {data.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    incrementCartItemQuantity(id, data.size);
                  }}>
                  <Image
                    source={require('../assets/icons/plus.png')}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                    }}></Image>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemSingleLinearGradient}>
          <View>
            <Image
              source={imagelink_square}
              style={styles.CartItemSingleImage}
            />
          </View>
          <View style={styles.CartItemSingleInfoContainer}>
            <View>
              <Text style={styles.CartItemTitle}>{name}</Text>
              <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.CartItemSingleSizeValueContainer}>
              <View style={styles.SizeBox}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize: 18,
                      fontWeight: '700',
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.SizeCurrency}>
                {prices[0].currency}
                <Text style={styles.SizePrice}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.CartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  decrementCartItemQuantity(id, prices[0].size);
                }}>
                <Image
                  source={require('../assets/icons/minus.png')}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                  }}></Image>
              </TouchableOpacity>
              <View style={styles.CartItemQuantityContainer}>
                <Text style={styles.CartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  incrementCartItemQuantity(id, prices[0].size);
                }}>
                <Image
                  source={require('../assets/icons/plus.png')}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                  }}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemLinearGradient: {
    flex: 1,
    gap: 12,
    padding: 12,
    borderRadius: 25,
  },
  CartItemRow: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: 20,
  },
  CartItemInfo: {
    flex: 1,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  CartItemTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubtitle: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.secondaryLightGreyHex,
  },
  CartItemTypeContainer: {
    height: 50,
    width: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLightGreenHex,
  },
  CartItemTypeText: {
    fontSize: 16,
    fontWeight: '700',
  },
  CartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CartItemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    color: COLORS.secondaryLightGreyHex,
  },
  SizeCurrency: {
    fontWeight: '700',

    fontSize: 18,
    color: COLORS.primaryGreenHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  CartItemIcon: {
    backgroundColor: COLORS.primaryGreenHex,
    padding: 3,
    borderRadius: 10,
  },
  CartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primaryGreenHex,
    alignItems: 'center',
    paddingVertical: 4,
  },
  CartItemQuantityText: {
    fontSize: 16,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
    borderRadius: 25,
  },
  CartItemSingleImage: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  CartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  CartItemSingleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  CartItemSingleQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default CartItem;
