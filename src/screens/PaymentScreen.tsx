import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../theme/Theme';
import {ScrollView} from 'react-native';
import PaymentHeader from '../components/PaymentHeader';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import {useStore} from '../store/store';
import PopUpAnimation from '../components/PopUpAnimation';

const PaymentList = [
  {
    name: 'Wallet',
    icon: require('../assets/icons/wallet.png'),
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/icons/apple.png'),
  },
  {
    name: 'Google Pay',
    icon: require('../assets/icons/gpay.png'),
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/icons/amazon.png'),
  },
];

const PaymentScreen = ({navigation, route}: any) => {
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );
  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Order');
    }, 2000);
  };
  const BackHandler = () => {
    navigation.pop();
  };
  const [ShowAnimation, setShowAnimation] = useState(false);
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <PaymentHeader title={'Payment'} BackHandler={BackHandler} />
        </TouchableOpacity>
      </View>
      {ShowAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        contentContainerStyle={styles.ScrollViewFlex}
        showsVerticalScrollIndicator={false}>
        <View style={styles.paymentStyle}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card');
            }}>
            <View
              style={[
                styles.cardMain,
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryGreenHex
                      : COLORS.primaryBlackRGBA,
                },
              ]}>
              <Text style={styles.cardtitle}>Credit Card</Text>
              <View>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.cardgradient}>
                  <View style={styles.cardrow}>
                    <Image
                      source={require('../assets/icons/chip.png')}
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain',
                      }}></Image>
                    <Image
                      source={require('../assets/icons/visa.png')}
                      style={{
                        tintColor: 'white',
                        width: 60,
                        height: 60,
                        bottom: 10,

                        resizeMode: 'contain',
                      }}></Image>
                  </View>
                  <View style={styles.cardnumberrow}>
                    <Text style={styles.cardnumber}>5642</Text>
                    <Text style={styles.cardnumber}>4478</Text>
                    <Text style={styles.cardnumber}>9278</Text>
                    <Text style={styles.cardnumber}>2443</Text>
                  </View>
                  <View style={styles.cardinfo}>
                    <View>
                      <Text style={styles.usertitle}>Card Holder Name</Text>
                      <Text style={styles.username}>Just_Nixx</Text>
                    </View>
                    <View style={styles.usertitle}>
                      <Text style={styles.usertitle}>Expiry Date</Text>
                      <Text style={styles.username}>01/29</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay With ${paymentMode}`}
        price={{price: route.params.amount, currency: '$'}}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  ScrollViewFlex: {
    flexGrow: 1,
  },
  headerContainer: {},
  paymentStyle: {
    padding: 15,
    gap: 15,
  },
  cardtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 20,
    paddingVertical: 8,
  },
  cardgradient: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
  },
  cardrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardnumberrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20,
  },
  cardnumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardinfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 15,
  },
  usertitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '200',
    paddingBottom: 6,
  },
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 10,
  },
  cardMain: {
    padding: 4,
    borderWidth: 2,
    borderRadius: 20,
  },
  LottieAnimation: {
    flex: 1,
  },
});
export default PaymentScreen;
