import { StyleSheet } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@/config';
import 'react-native-get-random-values'; 
import { useDispatch, useSelector } from 'react-redux';
import { setOrigin, setDestination, selectOrigin } from '@/store/uberSlices';

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
<GooglePlacesAutocomplete
      styles={inputBoxStyles}
      placeholder="Where From?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{
        key: GOOGLE_MAPS_API_KEY ,
        language: "en",
      }}
      fetchDetails={true}
      minLength={2}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details?.geometry?.location,
            description: data?.description,
          })
        );
        dispatch(setDestination(null));
      }}
    />
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

export default SearchBar;