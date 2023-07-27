import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

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