import { Image, Text, } from 'react-native';
import Container from '@/components/Container';
import tw from 'twrnc';
import SearchBar from '@/components/SearchBar';
import 'react-native-get-random-values';
import NavOption from '@/components/NavOption';
import Suggestion from '@/components/Suggestion';

export default function HomeScreen() {
  return (
    <Container>
      <Image
        source={{ uri: "https://i.ibb.co/Xz5pKDQ/logo/black.png" }}
        style={tw`w-24 h-24`}
        resizeMode='contain'
      />
      <SearchBar />
      <NavOption />
      <Suggestion />

    </Container>
  );
}

