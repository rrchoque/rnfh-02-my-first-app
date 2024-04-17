import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
// import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'

export const App = () => {
  return (
  <PaperProvider>
    <SafeAreaView style={{ flex: 1}}>
      {/* <HelloWorldScreen name="Reynaldo Choque" /> */}
      <CounterM3Screen />
    </SafeAreaView>
  </PaperProvider>

  )
}
