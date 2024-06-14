import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Alert, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native-animatable';
import {Modal, Portal} from 'react-native-paper';
import {AuthenticatedUserContext} from '../../../App';
import {fonts} from '../../constants/fonts';
import {images} from '../../constants/icons';
import Button from '../common/Button';
import Typography from '../common/Typography';
import Header from '../layout/Header';
import {styling} from './styles';
import {useDispatch} from 'react-redux';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';
import {clientPayment} from '../../redux/slice/PaymentSlice';

const Payment = ({route}: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {price} = route.params;
  const {user, theme}: any = useContext(AuthenticatedUserContext);

  const styles = styling(theme);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const backHome = () => {
    hideModal();
    navigation.navigate('Home');
  };

  const paymentHandle = async () => {
    try {
      const result = await dispatch(
        clientPayment({amount: Math.floor(price + 40) * 100}),
      );

      if (result.type === 'payment/fulfilled') {
        const {error: initError} = await initPaymentSheet({
          merchantDisplayName: 'Shoes for live',
          paymentIntentClientSecret: result.payload.paymentIntent,
        });

        if (initError) {
          Alert.alert('Something went wrong', initError.message);
          return;
        }

        const {error: paymentError} = await presentPaymentSheet();

        if (paymentError) {
          Alert.alert('Payment Cancel');
          return;
        }

        onCreateOrder();
      } else {
        Alert.alert('Something went wrong!!');
      }
    } catch (error) {
      console.log('Payment error:', error);
    }
  };

  const onCreateOrder = () => {
    Alert.alert('Payment Done Successfully!!');
  };

  return (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentInner}>
        <Header title={'Checkout'} />
        <View style={styles.paymentDetails}>
          <Typography
            title={'Contact Information'}
            size={14}
            textStyle={styles.infoText}
          />
          <View style={styles.infoContainer}>
            <View style={styles.infoContainerInner}>
              <View style={styles.logoBack}>
                <Image source={images.EMAIL_ICON} />
              </View>
              <View style={styles.infoDetails}>
                <Typography
                  title={user.email}
                  size={14}
                  textStyle={styles.info1Text}
                />
                <Typography
                  title={'Email'}
                  size={12}
                  color={theme.peraTextColor}
                  textStyle={styles.info1Text}
                />
              </View>
              <View>
                <Image source={images.EDIT_ICON} />
              </View>
            </View>
            <View style={styles.infoContainerInner}>
              <View style={styles.logoBack}>
                <Image source={images.PHONE_ICON} />
              </View>
              <View style={styles.infoDetails}>
                <Typography
                  title={'+88-692 -764-269'}
                  size={14}
                  textStyle={styles.info1Text}
                />
                <Typography
                  title={'Phone'}
                  size={12}
                  color={theme.peraTextColor}
                  textStyle={styles.info1Text}
                />
              </View>
              <View>
                <Image source={images.EDIT_ICON} />
              </View>
            </View>
          </View>
          <View>
            <Typography
              title={'Address'}
              size={14}
              textStyle={styles.infoText}
            />
            <Typography
              title={'Newahall St 36, London, 12908 - UK'}
              size={12}
              color={theme.peraTextColor}
              textStyle={styles.info1Text}
            />
          </View>
          <View style={styles.imgMap}>
            <Image source={images.MAP} />
          </View>
          <View>
            <Typography
              title={'Payment Method'}
              size={14}
              textStyle={styles.infoText}
            />
            <View style={styles.paymentMethod}>
              <View style={styles.paymentImg}>
                <Image source={images.PAYPAL} />
              </View>
              <View>
                <Typography
                  title={'Paypal Card'}
                  size={14}
                  textStyle={styles.infoText}
                />
                <Typography
                  title={'**** **** 0696 4629'}
                  size={12}
                  color={theme.peraTextColor}
                  textStyle={styles.info1Text}
                />
              </View>
              <View>
                <Image source={images.DOWN_ICON} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={[styles.totalInner, {marginBottom: 5}]}>
          <Typography
            size={16}
            color={theme.peraTextColor}
            title={'Subtotal'}
          />
          <Typography
            size={18}
            color={theme.headingTextColor}
            title={`$ ${price}`}
          />
        </View>
        <View style={[styles.totalInner, styles.extra]}>
          <Typography
            size={16}
            color={theme.peraTextColor}
            title={'Shipping'}
          />
          <Typography
            size={18}
            color={theme.headingTextColor}
            title={price ? '$40.90' : 0}
          />
        </View>
        <View style={styles.totalInner}>
          <Typography
            size={16}
            color={theme.headingTextColor}
            title={'Total Cost'}
          />
          <Typography
            size={18}
            color={theme.headingTextColor}
            title={price ? `$ ${price + 40}` : 0}
          />
        </View>
        <Button
          title={'Payment'}
          style={{marginTop: 10}}
          onPress={paymentHandle}
        />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}>
          <View>
            <Animatable.View
              animation="pulse"
              iterationCount={10}
              direction="alternate"
              style={styles.successImage}>
              <Image source={price === 0 ? images.CANCEL : images.SUCCESS} />
            </Animatable.View>
            <View style={{marginVertical: 30}}>
              <Typography
                title={
                  price === 0
                    ? 'Payment Cancel !!'
                    : 'Your Payment Is Successful !!'
                }
                size={20}
                textStyle={{fontFamily: fonts.bold, textAlign: 'center'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title={'Back To Shopping'}
                style={{width: 215}}
                onPress={backHome}
              />
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default Payment;
