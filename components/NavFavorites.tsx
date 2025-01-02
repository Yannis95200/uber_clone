import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const NavFavorites = () => {
    const data = [
        {
            _id: "301",
            icon: "home",
            location: "Home",
            destination: "19 All. Auguste Rodin, 95200 Sarcelles",
        },
        {
            _id: "302",
            icon: "briefcase",
            location: "Work",
            destination: "22 Terr. Bellini, 92800 Puteaux",
        },
    ];
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item?._id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-300`, { height: 1 }]} />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites