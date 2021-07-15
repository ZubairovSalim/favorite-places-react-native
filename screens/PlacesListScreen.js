import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
    return (
        <View>
            <Text>PlacesListScreen</Text>
        </View>
    )
};

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='All Place'
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                    navData.navigation.navigate('NewPlace');
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({

});

export default PlacesListScreen;