import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './components/navbar_component';
import ProductsListComponent from './components/product_list_component';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
            <NavbarComponent />
            <ProductsListComponent />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
