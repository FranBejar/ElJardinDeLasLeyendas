import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { useEffect } from 'react';
import { createSessions } from './src/SQLite';

export default function App() {

  useEffect( ()=> {
    
    createSessions()
      .then((result) => {
        console.log(result)
      })
      .catch(err => {
        console.log('Error al Iniciar Base de Datos')
        console.log(err)
      })
  })

  const [fontsLoaded] = useFonts({
    'DancingScript': require('./src/Assets/Fonts/Dancing_Script/DancingScript-Medium.ttf'),
    'DancingScript-Bold': require('./src/Assets/Fonts/Dancing_Script/DancingScript-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}