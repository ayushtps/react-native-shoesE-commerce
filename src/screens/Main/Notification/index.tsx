import React from 'react';
import {Image, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Typography from '../../../component/common/Typography';
import Header from '../../../component/layout/Header';
import {colors} from '../../../constants/colors';
import {NotificationList} from '../../../constants/data';
import {images} from '../../../constants/icons';
import {styles} from './styles';

const renderItem = ({item}: any) => {
  return (
    <View style={styles.notificationFlat}>
      <View style={styles.notiImage}>
        <Image source={item.img} />
      </View>
      <View>
        <Typography
          title={item.title}
          size={14}
          textStyle={styles.notiHeader}
        />
        <View style={styles.price}>
          <Typography
            title={item.price1}
            size={14}
            textStyle={[styles.txt, {marginRight: 10}]}
          />
          <Typography
            title={item.price2}
            size={14}
            color={colors.peraTextColor}
            textStyle={styles.txt}
          />
        </View>
      </View>
      <View style={styles.dotContainer}>
        <Typography
          title={item.min}
          size={14}
          color={colors.peraTextColor}
          textStyle={[styles.txt, {marginBottom: 10}]}
        />
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <View style={styles.notificationContainer}>
      <View>
        <Header title={'Notification'} />
      </View>
      <View style={styles.con1}>
        <Typography title={'Today'} size={18} textStyle={styles.txt} />
        <FlatList
          data={NotificationList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: 10}}></View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyView}>
              <Image source={images.EMPTY_LOGO} />
              <Typography
                title={'Empty'}
                color={colors.peraTextColor}
                size={16}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Notification;
