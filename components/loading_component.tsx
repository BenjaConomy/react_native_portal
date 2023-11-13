import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../assets/loading.json';

const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={loadingAnimation}
                autoPlay
                loop
                style={styles.lottie}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottie: {
        height: 500,
        width: 500
    }
});

export default LoadingComponent;
