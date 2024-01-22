import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/Theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import OrderHistoryCart from '../components/OrderHistoryCart';

const OrderHistory = ({navigation, route}: any) => {
  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };
  const tabBarHeight = useBottomTabBarHeight();
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  console.log(OrderHistoryList.length);
  return (
    <View style={styles.ScreenContainer}>
      <HeaderBar title="Orders History" />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.scrollinnerview, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No Order History'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCart
                    key={index.toString()}
                    navigationHandler={() => {}}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
              
            )}
            
          </View>
        </View>
     
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollview: {
    flexGrow: 1,
  },
  scrollinnerview: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: 20,
    gap: 30,
  },
});
export default OrderHistory;
