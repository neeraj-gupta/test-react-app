import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Greeting name='JAi' />
        <Greeting name='VEERU' />
        <Greeting name='Yo' />
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
