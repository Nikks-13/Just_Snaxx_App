import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/Theme';

interface FavouritesCardProps {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  category: string;
  desc: string;
  ingredients: string;
  type: string;
  average_rating: string;
  ratings_count: number;
  favourite: boolean;
  ToggleFavouriteItem: any;
}

const FavouritesCard: React.FC<FavouritesCardProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  category,
  desc,
  type,
  average_rating,
  ratings_count,
  favourite,
  ingredients,
  ToggleFavouriteItem,
}) => {
  return (
    <View style={styles.Container}>
      <ImageBackgroundInfo
        EnablebackHandler={false}
        imagelink_square={imagelink_square}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        category={category}
        ratings_count={ratings_count}
        desc={desc}
        ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.CardLinearGradientContainer}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <Text style={styles.DescTitle}>Description</Text>
        <Text style={styles.DescText}>{desc}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  CardLinearGradientContainer: {
    gap: 10,
    padding: 20,
  },
  DescTitle: {
    fontSize: 16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescText: {
    fontSize: 16,
    color: COLORS.secondaryLightGreyHex,
  },
});
export default FavouritesCard;
