import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image, Easing, TouchableOpacity } from "react-native";

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const xValue = useRef(new Animated.Value(0)).current;

 const fadeAnimation = () => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true
  }).start();
 }

  const moveAnimation = () => {
  Animated.timing(xValue, {
    toValue: 500,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true
  }).start();
 }
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
      style={[
        {
          left: xValue
        }
      ]}>
        <View style = {styles.rec}></View>
      </Animated.View>
      <View>
        <TouchableOpacity style ={styles.button} title="Move" onPress={moveAnimation}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    // alignItems: "center"
  },
  rec: {
    height: 100,
    width: 100,
    backgroundColor: "aqua"
  },
  button: {
    width: 40,
    alignItems: "center"
  }
});

export default App;