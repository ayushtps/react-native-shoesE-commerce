import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native-animatable';
import {Modal, Portal} from 'react-native-paper';
import {AuthenticatedUserContext} from '../../../App';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {images} from '../../constants/icons';
import Button from '../common/Button';
import Typography from '../common/Typography';
import Header from '../layout/Header';
import {styles} from './styles';

const Payment = ({route}: any) => {
  const navigation = useNavigation();
  const {price} = route.params;
  const {user}: any = useContext(AuthenticatedUserContext);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const backHome = () => {
    hideModal();
    navigation.navigate('Home');
  };

  const paymentHandle = () => {
    showModal();
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
                  color={colors.peraTextColor}
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
                  color={colors.peraTextColor}
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
              color={colors.peraTextColor}
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
                  color={colors.peraTextColor}
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
            color={colors.peraTextColor}
            title={'Subtotal'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
            title={`$ ${price}`}
          />
        </View>
        <View style={[styles.totalInner, styles.extra]}>
          <Typography
            size={16}
            color={colors.peraTextColor}
            title={'Shipping'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
            title={price ? '$40.90' : 0}
          />
        </View>
        <View style={styles.totalInner}>
          <Typography
            size={16}
            color={colors.headingTextColor}
            title={'Total Cost'}
          />
          <Typography
            size={18}
            color={colors.headingTextColor}
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
