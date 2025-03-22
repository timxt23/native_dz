import { Pressable, PressableProps, View, Text, StyleSheet } from "react-native";


export function ButtonPressable({ text, ...props }: PressableProps & { text: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: 16,
    backgroundColor: "#C67C4E"
  },
  textButton: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#FFFFFF"
  }
})