import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import { FlatList, StyleSheet, Text } from "react-native";


export default function History({ route, navigation }) {

    const { data } = route.params;

    return (
        <View style={styles.container}>
        <Text>History</Text>
        <FlatList
            data={data}
            renderItem={({ item }) => (
            <Text>{item.key}</Text>
            )}
        />
        <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatlist: {
        alignItems: 'center',
        justifyContent: 'center',
      },

  });