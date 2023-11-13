import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getProducts } from "../services/products_service"; 
import ErrorComponent from "./error_component";
import LoadingComponent from "./loading_component";
import ProductCard from "./product_component";
import Product from "../interfaces/product_interface";

const ProductsListComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingComponent />;
    }

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard {...item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ProductsListComponent;
