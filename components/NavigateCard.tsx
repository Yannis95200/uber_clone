import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '@/components/Container';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@/config';
import { useDispatch } from 'react-redux';
import { setDestination } from '@/store/uberSlices';
import NavFavorites from './NavFavorites';
import { TabBarIcon } from './navigation/TaBarIcon';
import Ridercard from './Ridercard';

const NavigateCard = () => {
    const [showRider, setShowRider] = useState(false)
    const dispatch = useDispatch()
    return (
        <Container>
            {showRider ? (
               <Ridercard  setShowRider={setShowRider}/>
            ) : (
                <>
                    <Text style={tw`text-xl text-center`}>Hello,John</Text>
                    <View>
                        <GooglePlacesAutocomplete styles={inputBoxStyles}
                            placeholder='Where to?'
                            fetchDetails={true}
                            query={{
                                key: GOOGLE_MAPS_API_KEY,
                                language: "en",
                            }}
                            minLength={2}
                            enablePoweredByContainer={false}
                            nearbyPlacesAPI='GooglePlacesSearch'
                            debounce={400}
                            onPress={(data, details = null) => {
                                dispatch(setDestination({
                                    location: details?.geometry?.location,
                                    description: data?.description

                                })
                                );
                                //setShowRider(false);

                            }}
                        />
                        <NavFavorites />
                        <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-t-gray-200`}>
                            <TouchableOpacity onPress={() => setShowRider(true)}
                                style={tw`flex flex-row items-center justify-between bg-black w-24 px-4 py-3 rounded-full border border-black`}
                            >
                                <TabBarIcon name='car' color="white" size={20} />
                                <Text style={tw`text-white text-center`}>Rides</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex flex-row items-center justify-between w-24 px-4 py-3 rounded-full border border-gray-300`}
                            >
                                <TabBarIcon name="fast-food-outline" color="black" size={20} />

                                <Text style={tw`text-center ml-1`}>Eats</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </Container>

    );
};
const inputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 10,
        flex: 0,
    },
    textInput: {
        fontSize: 18,
        backgroundColor: "#DDDDDD20",
        borderWidth: 1,
        borderColor: "#00000050",
        borderRadius: 50,
    },
    textInputContainer: {
        paddingBottom: 0,
    },
});

export default NavigateCard