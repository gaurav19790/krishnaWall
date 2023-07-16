import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, FlatList, TouchableOpacity, Dimensions
} from 'react-native';

import * as NewAppScreen from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;
const { width, height } = Dimensions.get('window');
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? NewAppScreen.Colors.darker : NewAppScreen.Colors.lighter,
    };
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users

    useEffect(() => {
        const subscriber = firestore()
            .collection('krishna wallpaper')
            .onSnapshot(querySnapshot => {
                // see next step
                const users: any = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    console.log(users);
    return (
        <View style={[backgroundStyle, { flex: 1, height: 100 }]} >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <FlatList
                data={users}
                style={{ flex: 1 }}
                numColumns={3}
                renderItem={({ item: { image } }) => (
                    <TouchableOpacity
                        style={{
                            marginTop: 5,
                            // marginRight: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: width / 3,
                            height: height / 2.5,
                            padding: 5,
                            // backgroundColor: "black"
                        }}
                        onPress={() => navigation.navigate("Full", { image })}
                    >
                        <Image
                            source={{ uri: image }}
                            resizeMode="cover"
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                        />
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}

export default HomeScreen