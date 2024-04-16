import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const CounterScreen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ count }</Text>

      {/* <PrimaryButton
        label='Incrementar'
        onPress={ () => setCount( count + 1 ) }
        onLongPress={ () => setCount( 0 ) }
      /> */}
      <Pressable
        onPress={ () => setCount( count + 1 ) }
        onLongPress={ () => setCount(0)}
      >
        <Text>Incrementar</Text>
      </Pressable>

      <Pressable
        onPress={ () => setCount( count - 1 ) }
      >
        <Text>Disminuir</Text>
      </Pressable>


    </View>
  );
};


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
} );