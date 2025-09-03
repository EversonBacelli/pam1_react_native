import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Cabecalho } from './src/components/cabecalho/cabecalho.js'
import { Tarefas } from './src/components/tarefas/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
         style={styles.fundo}
         source={require('./src/img/Agendaaaapng.png')}
      >
      </ImageBackground> 
     
      <Cabecalho></Cabecalho>
      <Tarefas></Tarefas>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '120%',
  },  
  fundo:{
    height: '100%',
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute'
  }
  
});
