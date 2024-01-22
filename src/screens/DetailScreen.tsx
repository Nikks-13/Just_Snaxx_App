import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {COLORS} from '../theme/Theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailScreen = ({navigation, route}: any) => {
  const [fullDesc, setFullDesc] = useState(false);
  const BackHandler = () => {
    navigation.pop();
  };

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (
    favourite: boolean,
    category: string,
    id: string,
  ) => {
    favourite
      ? deleteFromFavoriteList(category, id)
      : addToFavoriteList(category, id);
  };
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToCart = useStore((state: any) => state.addToCart);
  const addToCartHandler = ({
    id,
    index,
    name,
    imagelink_square,
    special_ingredient,
    type,
    price,
    category,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
      category,
    });
    calculateCartPrice();
    Toast.show('Item Added To Your Cart!', Toast.SHORT, {
      backgroundColor: '#1f3832',
      textColor: 'white',
    });
  };
  const ItemOfIndex = useStore((state: any) =>
    route.params.category == 'Drink' ? state.CoffeeList : state.FoodList,
  )[route.params.index - 1];

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <ImageBackgroundInfo
          EnablebackHandler={true}
          imagelink_square={ItemOfIndex.imagelink_square}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          category={ItemOfIndex.category}
          ratings_count={ItemOfIndex.ratings_count}
          desc={ItemOfIndex.description}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
        <View>
          <Text style={styles.TitleInfo}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={styles.DescInfo}>{ItemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={styles.DescInfo} numberOfLines={2}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
        </View>
        <Text style={styles.TitleInfo}>Size</Text>
        <View style={styles.SizeInfo}>
          {ItemOfIndex.prices.map((data: any) => (
            <TouchableOpacity
              key={data.size}
              onPress={() => {
                setPrice(data);
              }}
              style={[
                styles.SizeBox,
                {
                  borderColor:
                    data.size == price.size
                      ? COLORS.primaryGreenHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text
                style={[
                  styles.Sizes,
                  {
                    fontSize: ItemOfIndex.type == 'Food' ? 14 : 16,
                    color:
                      data.size == price.size
                        ? COLORS.primaryGreenHex
                        : COLORS.secondaryLightGreyHex,
                  },
                ]}>
                {data.size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <PaymentFooter
          price={price}
          buttonTitle={'Add To Cart'}
          buttonPressHandler={() => {
            addToCartHandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
              category: ItemOfIndex.category,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
  },

  scrollViewFlex: {
    flexGrow: 1,
  },
  TitleInfo: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 20,
    paddingLeft: 20,
  },
  DescInfo: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 8,
    paddingHorizontal: 20,
  },
  SizeInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  SizeBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
  },
  Sizes: {
    fontWeight: '900',
  },
});

export default DetailScreen;
