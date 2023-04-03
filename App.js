import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/Components/filme';

export default function App() {
  const series = [
    {
      titulo: "Avatar",
      sinopse:"Um garoto careta do balaco baco",
      avalialiacao:"10/10",
      imgUrl: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/08/confira-o-elenco-da-serie-live-action-de-avatar-a-lenda-de-aang.jpg",
    }
  ]
  
  return (
    <View style={styles.container}>
      {series.map(f => <Filme filme={f}/>)}
      <StatusBar style="auto"/>
     
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
});
