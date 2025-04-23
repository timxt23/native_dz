import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const insets = useSafeAreaInsets();
	const [fontsLoaded] = useFonts({
		SoraRegular: require('../assets/fonts/Sora-Regular.ttf'),
		SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					statusBarBackgroundColor: Colors.black,
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.black,
						paddingTop: insets.top,
					},
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="cart" />
				<Stack.Screen name="checkout" />
				<Stack.Screen name="address" />
			</Stack>
		</SafeAreaProvider>
	);
}
