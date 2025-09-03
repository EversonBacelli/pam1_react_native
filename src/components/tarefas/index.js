
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { Fragment } from 'react/jsx-runtime';

export function Tarefas() {
  return (
  <Fragment>
     <View style={styles.tarefas}>
           <Text style={styles.text}>
                Tarefa 1 - is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, 
          </Text>
           <Image
            style={styles.tinyLogo}
            source={require('../../img/aluno.jpg')}
          />
      </View>
      <View  style={styles.tarefas}>
           <Image
            style={styles.tinyLogo}
            source={require('../../img/aluno.jpg')}
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
            source={require('../../img/aluno.jpg')}
          />
      </View>
    </Fragment>
  );
}



      