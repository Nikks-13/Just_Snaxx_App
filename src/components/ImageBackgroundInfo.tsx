import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {COLORS} from '../theme/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
const MyStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
const ImageBackgroundInfo = ({
  EnablebackHandler,
  imagelink_square,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  desc,
  category,
  BackHandler,
  ToggleFavourite,
}: any) => {
  return (
    <View>
      <MyStatusBar backgroundColor="#1f3832" />
      <ImageBackground
        source={imagelink_square}
        style={styles.itemBackgroundImage}>
        {EnablebackHandler ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <Image
                source={require('../assets/icons/close.png')}
                style={styles.Images}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, category, id);
              }}>
              <Image
                tintColor={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                source={require('../assets/icons/heart.png')}
                style={styles.Images2}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer2}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, category, id);
              }}>
              <Image
                tintColor={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                source={require('../assets/icons/heart.png')}
                style={styles.Images3}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View>
              <Text style={styles.ItemTitle}>{name}</Text>
              <Text style={styles.ItemSubTitle}>{special_ingredient}</Text>
            </View>
            <View>
              <View style={styles.Rating}>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{height: 27, width: 27, tintColor: '#FFBF00'}}
                />
                <Text style={styles.ItemRating}> {average_rating}</Text>
              </View>
              <Text style={styles.ItemRatingCount}>({ratings_count})</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 45,
  },

  itemBackgroundImage: {
    width: '100%',
    aspectRatio: 25 / 30,
    justifyContent: 'space-between',
  },
  Images: {
    top: 20,
    left: 25,
    transform: [{rotate: '180deg'}],
    height: 40,
    width: 45,

    borderRadius: 10,
    resizeMode: 'contain',
  },
  Images2: {
    right: 15,
    top: 20,
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },
  Images3: {
    right: 15,
    top: 20,
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
  },
  ImageInfoInnerContainer: {
    backgroundColor: COLORS.primaryBlackRGBA,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,
    paddingTop: 8,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Rating: {display: 'flex', flexDirection: 'row', right: 15},
  ItemRating: {
    fontSize: 25,
    color: 'white',
    fontWeight: '800',
  },
  ItemRatingCount: {
    fontSize: 14,
    left: 6,
    fontWeight: '700',
    color: COLORS.primaryLightGreenHex,
  },
  ItemTitle: {fontSize: 25, color: 'white', fontWeight: '800', left: 15},
  ItemSubTitle: {
    fontSize: 18,
    borderColor: 'white',
    color: COLORS.primaryLightGreenHex,
    fontWeight: '600',
    left: 15,
  },
  ImageInfoOuterContainer: {
    paddingTop: 18,
    paddingHorizontal: 10,
  },
});
export default ImageBackgroundInfo;
