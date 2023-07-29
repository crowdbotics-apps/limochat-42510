import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const StartScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.slide}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.title}>{"Welcome to our app, enjoy it freely..."}</Text>
          <Text style={styles.instructions}>
            Please follow the instructions below to get started:
          </Text>
          <Text style={styles.step}>Step 1: Sign up for an account</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.title}>Explore the features</Text>
          <Text style={styles.instructions}>
            Take a look at all the amazing features our app has to offer.
          </Text>
          <Text style={styles.step}>
            Step 2: Explore the features of the app
          </Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.title}>Customize your profile</Text>
          <Text style={styles.instructions}>
            Personalize your profile by adding a photo and updating your
            information.
          </Text>
          <Text style={styles.step}>Step 3: Customize your profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e98"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 68
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 30,
    marginVertical: 40
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: "#1934b9",
    fontWeight: "700",
    marginBottom: 20,
    flexDirection: "row",
    flex: 1
  },
  instructions: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  },
  step: {
    textAlign: "center",
    fontSize: 16,
    color: "#828AB0",
    marginBottom: 10
  }
});
export default StartScreen;