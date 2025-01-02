import { View, Text, Platform } from 'react-native'
import React, { Children } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"

interface Props{
    children:React.ReactNode;
    className?: string;
}

const container = ({children,className}: Props) => {
  return (
    <SafeAreaView style={tw`bg-white flex ${
        Platform.OS === "android" ? "mt-10" : "mt-0"}`}>
        <View style= {[tw `p-5`, className ? tw`${className}`: null]}>
            {children}
        </View>
    </SafeAreaView>
  )
}

export default container