import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/Theme';
import HeaderBar from '../components/HeaderBar';
import {TouchableOpacity} from 'react-native';
import EmptyListAnimation from '../components/EmptyListAnimation';
import FavouritesCard from '../components/FavouritesCard';

const FavoriteScreen = ({navigation, route}: any) => {
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const ToggleFavourite = (
    favourite: boolean,
    category: string,
    id: string,
  ) => {
    favourite
      ? deleteFromFavoriteList(category, id)
      : addToFavoriteList(category, id);
  };
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <HeaderBar title={`Favourites`} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[
            styles.ScrollViewInnerView,
            {marginBottom: tabBarHeight + 100},
          ]}>
          <View style={styles.ItemContainer}>
            {FavoritesList.length == 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        category: data.category,
                      });
                    }}
                    key={data.id}>
                    <FavouritesCard
                      id={data.id}
                      ingredients={data.ingredients}
                      desc={data.description}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      category={data.category}
                      type={data.type}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <View style={styles.paymentfooter}></View>
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
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  paymentfooter: {
    top: 130,
  },
});
export default FavoriteScreen;
