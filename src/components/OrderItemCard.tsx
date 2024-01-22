import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/Theme';

const OrderItemCard = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.cardgradient}>
      <View style={styles.ItemCard}>
        <View style={styles.ItemHeader}>
          <Image style={styles.images} source={imagelink_square} />
          <View >
            <Text style={styles.TextTitle}>{name}</Text>
            <Text style={styles.TextSubTitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View >
          <Text style={styles.Textcurrency}>
            $ <Text style={styles.TextPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
      
      
      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.CardTableRow}>
          <View style={styles.CardTableRow}>
            <View style={styles.Size}>
              <Text style={styles.SizeText}>{data.size}</Text>
            </View>
          </View>
          <View style={styles.PriceBox}>
            <Text style={styles.PriceCurrency}>
              {data.currency}
              <Text style={styles.Price}> {data.price}</Text>
            </Text>
          </View>
          <View style={styles.CardTableRow}>
            <Text style={styles.QuantityX}>
              X <Text style={styles.Quantity}>{data.quantity}</Text>
            </Text>
            <Text style={styles.QuantityPrice}> $ <Text style={styles.QuantityPriceAMOUNT}>{(data.quantity * data.price).toFixed(2).toString()}</Text>
             
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  cardgradient: {
    gap: 20,
    padding: 20,
    borderRadius: 20,
  },
  ItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  images: {
    height: 90,
    width: 90,
    borderRadius: 20,
    marginRight: 15,
  },
  TextTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  TextSubTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  Textcurrency: {
    color: COLORS.primaryGreenHex,
    fontSize: 20,
    fontWeight: '700',
  },
  TextPrice: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  CardTableRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Size: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth:1,
    borderRightColor: COLORS.secondaryGreyHex,
  },
  SizeText:{
    fontSize:18,
    fontWeight:'600',
    color:COLORS.secondaryLightGreyHex,

  },
  PriceBox:{
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    padding:10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth:1,
    borderLeftColor: COLORS.secondaryGreyHex,
 
  },
  PriceCurrency:{
    fontSize:18,
    fontWeight:'600',
    color:COLORS.primaryGreenHex,
  },
  Price:{ 
    color:COLORS.secondaryLightGreyHex,
},

    QuantityX:{
    height: 45,
    padding:10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color:COLORS.primaryGreenHex,
    fontSize:18,
    fontWeight:'900',
 
    },   
    Quantity:{
        color:COLORS.secondaryLightGreyHex,

    },
    QuantityPrice:{  height: 45,
        padding:10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color:COLORS.primaryGreenHex,
        fontSize:18,
        fontWeight:'700',

    },
    QuantityPriceAMOUNT:{
        color:COLORS.secondaryLightGreyHex,
    },

});
export default OrderItemCard;
