import { Button, StyleSheet, Text, View } from 'react-native';

import * as Nvm from 'nvm';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='hello'
        onPress={async () => {
          const res = await Nvm.hello();
          console.log(res);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
