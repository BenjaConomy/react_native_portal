import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import errorAnimation from '../assets/error.json';

const ErrorComponent = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={errorAnimation}
                autoPlay
                loop
                style={styles.lottie}
            />
            <Text style={styles.text}>Oops! Hubo un error.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottie: {
        height: 200,
        width: 200
    },
    text: {
        fontSize: 20, // Equivalente a un <h2> aproximadamente
        fontWeight: 'bold'
    }
});

export default ErrorComponent;
