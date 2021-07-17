import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import {addPlace} from '../store/places-actions';

const NewPlacesScreen = props => {
    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue));
        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    value={titleValue}
                    onChangeText={titleChangeHandler}
                />
                <Button
                    title="Save Place"
                    color={Colors.primary}
                    onPress={() => {
                        savePlaceHandler();
                    }}
                />
            </View>
        </ScrollView>
    )
};

NewPlacesScreen.navigationOptions  = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlacesScreen;