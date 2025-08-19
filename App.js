import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
         style={styles.fundo}
         source={require('./src/img/Agendaaaapng.png')}
      >
      </ImageBackground> 
     
      <Text>Agenda de Alunos</Text>
      <View style={styles.tarefas}>
           <Text style={styles.text}>
                Tarefa 1 - is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, 
          </Text>
           <Image
            style={styles.tinyLogo}
            source={require('./src/img/aluno.jpg')}
          />
      </View>
      <View  style={styles.tarefas}>
           <Image
            style={styles.tinyLogo}
            source={require('./src/img/aluno.jpg')}
          />
           <Text style={styles.text}>
              Tarefa 2 - t is a long established fact 
              that a reader will be distracted by the readable 
              content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that
          </Text>
      </View>
      <View   style={styles.tarefas}>
           <Text style={styles.text}>
                Tarefa 3 - Contrary to popular belief, 
                Lorem Ipsum is not simply random text. It has 
                roots in a piece of classical Latin literature from 
                45 BC, making it over 2000 years old.
            </Text>
           <Image
            style={styles.tinyLogo}
            source={require('./src/img/aluno.jpg')}
          />
      </View>
       
    
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
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: '25%',
    shadowColor:  '60px -16px teal;'
  },
  tarefas:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    gap: '20px', 
    marginTop: '10px',
    border: 'solid black 1px',
    padding: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px'
  }, 
  text:{
     width: '50%',
     fontSize: '10px',
     textAlign: 'justify'
  }
});
