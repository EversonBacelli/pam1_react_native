import { StyleSheet } from 'react-native';


export let styles = StyleSheet.create({
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