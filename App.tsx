// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ActivityIndicator, Dimensions, Image, Text, View } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import FullScreen from './screens/FullScreen'
const {width, height} =Dimensions.get('window')

const Stack = createNativeStackNavigator();


const App=()=> {
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000)

  // }, []);
  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
  //       <View style={{ justifyContent: 'center', width: width, height: height/3, borderRadius: 10,alignItems: 'center', }}>
  //         <Image style={{ width:width/2 , height: height/3, borderRadius: 15}} source={require("./play_store_512.png")} />
  //         {/* <Image style={{ width: 100, height: 100, borderRadius: 15, marginBottom: 20 }} source={{uri:"https://i.pinimg.com/564x/3e/a4/21/3ea4213b4002dbb429c4bfde662d4d4e.jpg"}} /> */}
  //       </View>
  //       <ActivityIndicator size="large" color="blue" />
  //     </View>
  //   )
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: true
  }}   initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Full" component={FullScreen}  options={({route})=>{return( { title : route.params.item, }) }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;