import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistory from '../screens/OrderHistoryScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/Theme'
import { BlurView } from '@react-native-community/blur'



const Tab=createBottomTabNavigator();

const TabNavigator = () => {
  return (
   
   <Tab.Navigator screenOptions={{headerShown:false,
   tabBarHideOnKeyboard:true,
   tabBarShowLabel:false,
   tabBarStyle : styles.tabBarStyle,
   tabBarBackground:()=>(
    <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles}/>
   )}}>
    <Tab.Screen name='Home' component={HomeScreen}
    options={{
        tabBarIcon:({focused , color,size})=>(
            <Image source={require('../assets/icons/home.png')}  style={{ tintColor:focused?COLORS.primaryGreenHex:COLORS.primaryLightGreyHex , width: 35, height: 35, resizeMode: 'contain',marginTop:15 }}></Image>
        )
    }}></Tab.Screen>
    <Tab.Screen name='Cart' component={CartScreen}options={{
        tabBarIcon:({focused , color,size})=>(
            <Image source={require('../assets/icons/cart.png')}  style={{ tintColor:focused?COLORS.primaryGreenHex:COLORS.primaryLightGreyHex , width: 35, height: 35, resizeMode: 'contain',marginTop:15 }}></Image>
        )
    }} ></Tab.Screen>
    <Tab.Screen name='Fav' component={FavoritesScreen}options={{
        tabBarIcon:({focused , color,size})=>(
            <Image source={require('../assets/icons/heart.png')}  style={{ tintColor:focused?COLORS.primaryGreenHex:COLORS.primaryLightGreyHex , width: 35, height: 35, resizeMode: 'contain',marginTop:15 }}></Image>
        )
    }}></Tab.Screen>
    <Tab.Screen name='Order' component={OrderHistory}options={{
        tabBarIcon:({focused , color,size})=>(
            <Image source={require('../assets/icons/bag.png')}  style={{ tintColor:focused?COLORS.primaryGreenHex:COLORS.primaryLightGreyHex , width: 35, height: 35, resizeMode: 'contain',marginTop:15 }}></Image>
        )
    }}></Tab.Screen>
   </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    tabBarStyle:{
        height:60,
        position:'absolute',
        backgroundColor:COLORS.primaryBlackHex,
        borderTopWidth:0,
        elevation:0,
        borderTopColor:'transparent',
    },
    BlurViewStyles:{
        position:'relative',
        top:0,
        bottom:0,
        right:0,
        left:0

    }

})
export default TabNavigator;

