import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Typography from '../../../component/common/Typography';
import {introSlides} from '../../../constants/data';
import {images} from '../../../constants/icons';
import {AuthenticatedUserContext} from '../../../../App';
import {styling} from './styles';

interface SlideItem {
  title: string;
  text: string;
  image: any;
}

interface introProps {
  navigation: StackNavigationProp<any, any>;
}

const Intro = ({navigation}: introProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {theme} = useContext(AuthenticatedUserContext);

  const styles = styling(theme);

  const renderItem = ({item}: {item: SlideItem}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.circle4}>
          <View style={styles.circleInner}></View>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.circle3}></View>
            <Image
              source={item.image}
              style={styles.image}
              height={321}
              width={375}
            />
          </View>
          <View style={styles.content}>
            <Typography
              title={item.title}
              size={40}
              color={theme.headingTextColor}
              textStyle={styles.title}
            />
            <Typography
              title={item.text}
              size={20}
              color={theme.peraTextColor}
              textStyle={styles.text}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <Pressable
        style={styles.buttonCircle}
        onPress={() => navigation.navigate('Login')}>
        <Image source={images.CHECK_ARROW} />
      </Pressable>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={images.NEXT_ARROW} />
      </View>
    );
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <View style={styles.introContainer}>
      <AppIntroSlider
        data={introSlides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        showNextButton={true}
        activeDotStyle={{
          alignItems: 'flex-start',
          backgroundColor: theme.buttonColor,
          borderRadius: 12,
          height: 8,
          width: 47,
          marginBottom: 20,
        }}
        dotStyle={{
          backgroundColor: theme.dotColor,
          borderRadius: 12,
          height: 8,
          width: 17,
          marginBottom: 20,
        }}
        onSlideChange={handleSlideChange}
      />
    </View>
  );
};

export default Intro;
