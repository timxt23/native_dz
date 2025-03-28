import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ButtonPressable } from './shared/Button/Button';
import { Colors, Fonts, Gaps } from './shared/tokens';

export default function App() {
  const animatedValue = new Animated.Value(-100)
  const opacity = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 1]
  })

  const toEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <ImageBackground
      source={require('./assets/backgrounds/login-bg/coffee.png')}
      resizeMode='cover'
      style={styles.bg}
      imageStyle={styles.bgImage}
    >
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Animated.Text style={{
            ...styles.titleStyle, transform: [
              { translateY: animatedValue }
            ],
            opacity: opacity
          }} onLayout={toEnter}>
            Одно из самых вкусных кофе в городе!
          </Animated.Text>
          <Text style={styles.titileSecondaryStyle}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
          <ButtonPressable text='Начать' />
        </View>
        <StatusBar style="auto" />
      </View >
    </ImageBackground >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  bg: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
  },
  bgImage: {
    position: 'absolute',
    width: 'auto',
    marginBottom: 300
  },
  loginContainer: {
    gap: Gaps.g8,
    marginBottom: 43,
    width: '80%'
  },
  titleStyle: {
    fontFamily: "Sora",
    fontSize: Fonts.f34,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 34,
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.white
  },
  titileSecondaryStyle: {
    fontFamily: "Sora",
    fontSize: Fonts.f14,
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: 1,
    textAlign: "center",
    color: Colors.gray
  },
});
