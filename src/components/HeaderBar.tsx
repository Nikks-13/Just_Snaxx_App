import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: 28,
    padding: 28,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: 20,
    color: COLORS.primaryWhiteHex,
  },
});
export default HeaderBar;
