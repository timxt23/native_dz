import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleStyle}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.titileSecondaryStyle}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Pressable style={styles.loginButton}>
          <Text style={styles.textLoginButton}>Начать</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    gap: 8,
    marginBottom: 43,
    width: '80%'
  },
  titleStyle: {
    fontFamily: "Sora",
    fontSize: 34,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 34,
    letterSpacing: 1,
    textAlign: "center",
    color: "#FFFFFF"
  },
  titileSecondaryStyle: {
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: 1,
    textAlign: "center",
    color: "#A9A9A9"
  },
  loginButton: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: 16,
    backgroundColor: "#C67C4E"
  },
  textLoginButton: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#FFFFFF"
  }
});
