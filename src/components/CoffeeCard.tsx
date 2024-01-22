import {
  Dimensions,
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import BGicon from './BGicon';
const CARD_WIDTH = Dimensions.get('window').width * 0.35;
const CARD_HEIGHT = Dimensions.get('window').width * 0.33;
interface CoffeeCardProp {
  id: string;
  index: number;
  type: string;
  category: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}
const CoffeeCard: React.FC<CoffeeCardProp> = ({
  id,
  index,
  type,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
  category,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImage}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <Image
            source={require('../assets/icons/star.png')}
            style={{
              tintColor: '#ebc400',
              width: 16,
              height: 16,
              resizeMode: 'contain',
            }}></Image>
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.CardPriceCurrency}>
          ${' '}
          <Text style={styles.CardPrice}>
            {typeof price === 'object' ? price.price : price}
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              type,
              imagelink_square,
              name,
              special_ingredient,
              average_rating,
              prices: [{...price, quantity: 1}],
              buttonPressHandler,
              category,
            });
          }}>
          <BGicon BGColor={COLORS.primaryGreenHex} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: 15,
    borderRadius: 25,
  },
  CardImage: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 15,
    marginBottom: 3,
    overflow: 'hidden',
  },

  CardRatingContainer: {
    paddingRight: 7,
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 5,
    position: 'absolute',
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 0,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 22,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardTitle: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  CardSubTitle: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    paddingBottom: 10,
  },
  CardPriceCurrency: {
    color: COLORS.primaryGreenHex,
    fontSize: 20,
    fontWeight: '900',
    verticalAlign: 'bottom',
  },
  CardPrice: {
    color: 'white',
  },
});
export default CoffeeCard;
