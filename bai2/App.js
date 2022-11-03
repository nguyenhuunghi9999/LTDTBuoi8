import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function fly(){
    const amin = Animated.timing(fadeAnim ,{
      toValue:-500,
      duration: 2000,
      useNativeDriver: true
    })
    amin.start();
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
      style={[
        {
          transform: [{translateY: fadeAnim}]
        }
      ]}>
        <Image
        style={{width:100, height:100}}
        source={{
          uri: 'https://banner2.cleanpng.com/20180624/cgc/kisspng-airplane-aircraft-logo-5b2fe8a1ee5362.2398002715298664019762.jpg',
        }}
      />
      </Animated.View>
      <View>
        <Button title="FLY" onPress={fly} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
});

export default App;