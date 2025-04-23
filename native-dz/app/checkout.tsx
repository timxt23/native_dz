import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { Colors } from '../shared/tokens';

export default function Checkout() {
	return (
		<View>
			<Text style={{ color: Colors.white }}>Заказ оформлен</Text>
		</View>
	);
}
