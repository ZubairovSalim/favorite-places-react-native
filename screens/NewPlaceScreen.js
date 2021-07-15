import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NewPlacesScreen = props => {
    return (
        <View>
            <Text>NewPlacesScreen</Text>
        </View>
    )
};

NewPlacesScreen.navigationOptions  = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({

});

export default NewPlacesScreen;