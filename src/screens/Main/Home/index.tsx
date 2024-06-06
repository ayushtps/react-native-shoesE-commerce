import React, { useState } from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import CategoryWiseItem from '../../../component/CategoryWiseItem';
import Typography from '../../../component/common/Typography';
import { colors } from '../../../constants/colors';
import { categoryList } from '../../../constants/data';
import { fonts } from '../../../constants/fonts';
import { images } from '../../../constants/icons';
import { categorySelect } from '../../../redux/slice/CategorySlice';
import { RootState } from '../../../redux/store/store';
import Search from './Search';
import { styles } from './styles';
import { DrawerActions } from '@react-navigation/native';

const renderItem = ({item, isSelected, onPress}: any) => {
  return (
    <Pressable
      style={[styles.itemContainer, isSelected && styles.selectedItemContainer]}
      onPress={onPress}>
      <View style={styles.headerBack}>
        <Image source={item.image} />
      </View>
      {isSelected && (
        <Typography
          title={item.name}
          size={14}
          color={colors.secondColor}
          textStyle={styles.itemText}
        />
      )}
    </Pressable>
  );
};

const Home = ({navigation}: any) => {
  const [selectedItemId, setSelectedItemId] = useState(1);
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.addCart);

  const handleItemPress = (itemId: any, item: any) => {
    setSelectedItemId(itemId);
    dispatch(categorySelect(item));
  };

  return (
    <KeyboardAwareScrollView style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.headerBack}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={images.DRAWER_ICON} />
        </Pressable>
        <View style={styles.middlePoint}>
          <Typography
            title={'Store location'}
            size={12}
            color={colors.peraTextColor}
            textStyle={{fontFamily: fonts.regular}}
          />
          <View style={styles.location}>
            <Image source={images.LOCATION_ICON} style={styles.locationIcon} />
            <Typography
              title={'Mondolibug, Sylhet'}
              size={14}
              textStyle={{fontFamily: fonts.regular}}
            />
          </View>
        </View>
        <Pressable
          style={styles.headerBack}
          onPress={() => navigation.navigate('CartList')}>
          {data.length > 0 && (
            <View style={styles.cartCircle}>
              <Typography
                title={data.length}
                color={colors.secondColor}
                size={10}
                textStyle={{fontFamily: fonts.bold}}
              />
            </View>
          )}
          <Image source={images.HEADER_CART_ICON} />
        </Pressable>
      </View>
      <Search/>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryList}
          renderItem={({item}) =>
            renderItem({
              item,
              isSelected: selectedItemId === item.id,
              onPress: () => handleItemPress(item.id, item),
            })
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{marginHorizontal: 10}}></View>
          )}
          ListEmptyComponent={()=>(
            <View style={styles.emptyView}>
              <Image source={images.EMPTY_LOGO}/>
            </View>
          )}
        />
      </View>
      <View style={styles.detailCategory}>
        <Typography
          title={'Popular Shoes'}
          size={16}
          textStyle={{fontFamily: fonts.medium}}
        />
        <Typography
          title={'See all'}
          size={13}
          color={colors.buttonColor}
          textStyle={{fontFamily: fonts.medium}}
        />
      </View>
      <View style={styles.renderCategory}>
        <CategoryWiseItem />
      </View>
    </KeyboardAwareScrollView>
  );
};



export default Home;
