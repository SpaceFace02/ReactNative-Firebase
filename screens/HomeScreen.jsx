import { Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen";
import { app } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const HomeScreen = () => {
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* ? is null checking, if its undefined, just leave it as undefined. */}
      <Text>Email: {auth.currentUser?.email}</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
