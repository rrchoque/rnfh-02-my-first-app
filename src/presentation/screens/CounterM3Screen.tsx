import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>

      <Icon name="accessibility-outline" size={ 35 } />

      <FAB
        label="+1"
        style={globalStyles.fab}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};
