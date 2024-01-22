import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';
import OrderItemCard from './OrderItemCard';

interface OrderHistoryCartProps {
  navigationHandler: any;
  CartList: any;
  CartListPrice: string;
  OrderDate: string;
}

const OrderHistoryCart: React.FC<OrderHistoryCartProps> = ({
  navigationHandler,
  CartList,
  CartListPrice,
  OrderDate,
}) => {
  return (
    <View style={styles.cardcontainer}>
      <View style={styles.cardheader}>
        
        <View>
          <Text style={styles.Title}>Order Date</Text>
          <Text style={styles.Subtitle}>{OrderDate}</Text>
        </View>
        <View>
          <Text style={styles.Title}>Total Amount</Text>
          <Text
            style={[
              styles.Subtitle,
              {
                color: COLORS.primaryGreenHex,
                fontSize: 20,
                fontWeight: '700',
                alignSelf: 'flex-end',
              },
            ]}>
            $ {CartListPrice}
          </Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity key={index.toString() + data.id}>
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View><Text style={{fontSize:20,textAlign:'center',color:COLORS.primaryLightGreyHex}}>END OF ORDER</Text>
      <View
                    style={{
                        marginBottom:50,
                        minWidth:100,
                      height: 2,
                      backgroundColor: COLORS.secondaryLightGreyHex,
                    }} ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardcontainer: {
    gap: 10,
  },
  cardheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',

    marginTop: 10,
  },
  Title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  Subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  ListContainer: {
    gap: 20,
  },
});
export default OrderHistoryCart;
