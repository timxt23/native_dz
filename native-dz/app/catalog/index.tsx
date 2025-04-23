import { Text, View } from 'react-native';
import { Colors } from '../../shared/tokens';
import { ButtonPressable } from '../../shared/Button/Button';
import { router } from 'expo-router';

export default function Catalog() {
	return (
		<View>
			<Text style={{ color: Colors.white }}>Каталог</Text>
			<ButtonPressable text="Товар1" onPress={() => router.navigate('/catalog/qweerty')} />
			<ButtonPressable text="Корзина" onPress={() => router.navigate('/cart')} />
			<ButtonPressable text="Заказ" onPress={() => router.navigate('/checkout')} />
			<ButtonPressable text="Адрес" onPress={() => router.navigate('/address')} />
		</View>
	);
}
