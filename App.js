import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  } ,[]);

if(isLoading){

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="red"/>
      <Image source={require('./assets/splash.png')} style={{width:200,height:200}}/>
    </View>
  )
}

  return (
    <View style={{flex:1,backgroundColor:'#eae0cd'}}>
    <WebView
      style={styles.container}
      source={{ uri: 'http://ayintapbaklava.com.tr/' }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
