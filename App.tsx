import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from '@react-native-community/blur'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <MaskedView
        style={{}}
        maskElement={
          <Text
            style={{
              fontSize: 60,
              fontWeight: 'bold',
            }}
          >
            Basic Mask\nertyuio
          </Text>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        {/* <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} /> */}
        <LinearGradient
          // Background Linear Gradient
          colors={['#ff0000', '#00ff00', '#0000ff']}
          style={
            {
              // flex: 1,
              // height: '55%',
              // width: '100%',
            }
          }
        >
          <Text
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              opacity: 0,
            }}
          >
            Basic Mask\nertyuio
          </Text>
        </LinearGradient>
      </MaskedView>
      <BlurView
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
