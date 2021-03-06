import React, {useEffect} from 'react';
import {View, Text, FlatList, Platform, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import {loadPlaces} from '../store/places-actions';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlaces());
    }, [dispatch]);

    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={itemData => {
            return (
                <PlaceItem
                    image={itemData.item.image}
                    title={itemData.item.title}
                    address={itemData.item.address}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
            )
        }} />
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