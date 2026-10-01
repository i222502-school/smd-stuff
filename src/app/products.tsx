import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Water Bottle',
    description: 'Insulated steel bottle, keeps drinks cold for 24 hours.',
    price: 15,
  },
  {
    id: '2',
    name: 'Phone',
    description: '6.5" display, 128GB storage, dual camera.',
    price: 499,
  },
  {
    id: '3',
    name: 'Track Dragon',
    description: 'Remote-controlled racing dragon for the track.',
    price: 89,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView type="backgroundElement" style={styles.cardHeader}>
        <ThemedText type="smallBold">{product.name}</ThemedText>
        <ThemedText type="smallBold">${product.price}</ThemedText>
      </ThemedView>
      <ThemedText type="small" themeColor="textSecondary">
        {product.description}
      </ThemedText>
    </ThemedView>
  );
}

export default function ProductsScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Products</ThemedText>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.six,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
  },
  list: {
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  card: {
    gap: Spacing.one,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
