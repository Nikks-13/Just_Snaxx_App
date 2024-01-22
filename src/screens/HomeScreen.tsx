import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import React, {useRef, useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/Theme';
import HeaderBar from '../components/HeaderBar';
import CoffeeCard from '../components/CoffeeCard';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].type] == undefined) {
      temp[data[i].type] = 1;
    } else {
      temp[data[i].type]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let CoffeeList = data.filter((item: any) => item.type == category);
    return CoffeeList;
  }
};

const HomeScreen = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const FoodList = useStore((state: any) => state.FoodList);
  const ListRef: any = useRef<FlatList>();
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLocaleLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };
  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToCart = useStore((state: any) => state.addToCart);
  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    imagelink_square,
    special_ingredient,
    type,
    prices,
    category,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      imagelink_square,
      special_ingredient,
      type,
      prices,
      category,
    });
    calculateCartPrice();

    Toast.show('Item Added To Cart.', Toast.SHORT, {
      backgroundColor: '#1f3832',
      textColor: 'white',
    });
  };
  //console.log(sortedCoffee.length);
  //console.log(categories) ;
  //console.log('CoffeeList=', CoffeeList.length, 'FoodList=', FoodList.length);
  return (
    <View style={styles.ScreenContainer}>
      <HeaderBar title={'Just_Snax'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/*App Header */}

        {/*search input */}
        <Text style={styles.ScreenTitle}>Find the best Snacks for you</Text>
        <View style={styles.TextInputComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <Image
              source={require('../assets/icons/search.png')}
              style={{
                tintColor: COLORS.primaryGreenHex,
                width: 30,
                height: 34,
                resizeMode: 'contain',
                paddingHorizontal: 30,
              }}></Image>
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your  Drink.."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <Image
                source={require('../assets/icons/close.png')}
                style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  paddingHorizontal: 30,
                }}></Image>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/*category scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryGreenHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveStateCategory}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyContainer}>
              <Text style={styles.EmptyList}>No Drinks Available!</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatlistContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    category: item.category,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  category={item.category}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices?.[1]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        {/*food flatlist */}
        <Text style={styles.FoodItem}>Snacks Item</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FoodList}
          contentContainerStyle={styles.FlatlistContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    category: item.category,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  category={item.category}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices?.[1]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 0.9355,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: 30,
    color: COLORS.primaryLightGreenHex,
    textAlign: 'center',
    fontWeight: '600',
  },

  TextInputComponent: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInputContainer: {
    height: 40,
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primaryWhiteHex,
    minWidth: 300,
    maxWidth: 300,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },

  ActiveStateCategory: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primaryGreenHex,
  },

  CategoryText: {
    fontSize: 18,
    color: COLORS.primaryLightGreyHex,
    fontWeight: '700',
    marginBottom: 3,
  },
  FlatlistContainer: {
    gap: 20,
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  FoodItem: {
    color: COLORS.primaryGreenHex,
    fontSize: 20,
    padding: 5,
    paddingLeft: 20,
    fontWeight: '700',
    paddingBottom: 10,
  },
  EmptyContainer: {
    width: Dimensions.get('window').width - 60,
  },
  EmptyList: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 30,
    fontWeight: '900',
    color: COLORS.primaryGreenHex,
  },
});

export default HomeScreen;
