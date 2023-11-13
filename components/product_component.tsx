import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Product from "../interfaces/product_interface";

const ProductCard: React.FC<Product> = ({ image, title, price }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // Estilos para la tarjeta
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        // Estilos para la imagen
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        // Estilos para el título
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        // Estilos para el precio
        marginTop: 5,
        fontSize: 16,
        color: '#666'
    }
});

export default ProductCard;
