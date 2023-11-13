import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
    return (
        <View style={styles.navbar}>
            <Image source={logo} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    logo: {
        width: 100,
        resizeMode: 'contain'
    }
});

export default NavbarComponent;
