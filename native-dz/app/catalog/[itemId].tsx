import { Text, View } from 'react-native';
import { Colors } from '../../shared/tokens';
import { useLocalSearchParams } from 'expo-router/build/hooks';

export default function CatalogItem() {
	const { itemId } = useLocalSearchParams();
	return (
		<View>
			<Text style={{ color: Colors.white }}>Страница Товара {itemId}</Text>
		</View>
	);
}
