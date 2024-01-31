import { StatusBar } from 'expo-status-bar'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView, VibrancyView } from '@react-native-community/blur'

const { width, height } = Dimensions.get('screen')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MaskedView
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
        <LinearGradient colors={['#ff0000', '#00ff00', '#0000ff']}>
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
      </MaskedView> */}
      <Image
        source={{
          uri: 'https://papers.co/wallpaper/papers.co-bh38-iceberg-dark-night-sky-art-34-iphone6-plus-wallpaper.jpg',
        }}
        height={height}
        width={width}
        style={{ zIndex: -1, position: 'absolute' }}
      />
      {/*  */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: width - 40,
          alignSelf: 'center',
          // padding: 30,
          borderRadius: 30,
          height: height / 3,
          // backgroundColor: 'red',
          overflow: 'hidden',
          // borderWidth: 1,
          // borderColor: '#ffffff40',
        }}
      >
        <BlurView
          style={{
            flex: 1,
            width: '100%',
            position: 'absolute',
            padding: 20,
            height: '100%',
            // backgroundColor: '#FFFFFF10',
          }}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        >
          <Text
            style={{
              fontSize: 36,
              letterSpacing: 1,
              fontWeight: '400',
              paddingBottom: 10,
            }}
          >
            Title
          </Text>
          <View
            style={{
              width: '100%',
              borderRadius: 100,
              padding: 10,
              backgroundColor: '#D9EEFF90',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
              }}
            >
              Search
            </Text>
          </View>
        </BlurView>
      </View>
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
