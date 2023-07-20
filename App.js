import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  // const [categorySelected, setCategorySelected] = useState("")
  // const [productSelected, setProductSelected] = useState("")

  const [fontsLoaded] = useFonts({
    'DancingScript': require('./src/Assets/Fonts/Dancing_Script/DancingScript-Medium.ttf'),
    'DancingScript-Bold': require('./src/Assets/Fonts/Dancing_Script/DancingScript-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Navigator/>
  );
}