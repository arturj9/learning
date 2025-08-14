import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';

import Pessoas from './src/Pessoas';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

// Switch
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={valorSwitch => this.setState({ status: valorSwitch })}
          thumbColor='#f700ffff'
        />
        <Text style={{textAlign:'center', fontSize:30}}>{(this.state.status) ? 'Ativo': 'Inativo'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

// Slider
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valor:0
//     };
//   }

//   render() {
//     return <View style={styles.container}>
//       <Slider
//       minimumValue={0}
//       maximumValue={100}
//       onValueChange={(valorSelecionado) => this.setState({valor:valorSelecionado})}
//       value={this.state.valor}
//       minimumTrackTintColor='#00ff00'
//       maximumTrackTintColor='#ff0000'
//       thumbTintColor='#008afcff'
//       />
//       <Text style={{textAlign:'center', fontSize:30}}>Você tem {this.state.valor.toFixed(0)} kg</Text>
//     </View>;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 15
//   },
// });

// Picker

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pizza: 0,
//       pizzas: [
//         { key: 1, nome: 'Strogonoff', valor: 35.90 },
//         { key: 2, nome: 'Calabresa', valor: 59 },
//         { key: 3, nome: 'Quatro queijos', valor: 37 },
//         { key: 4, nome: 'Brigadeiro', valor: 25.7 },
//         { key: 5, nome: 'Portuguesa', valor: 70 },
//       ],
//     };
//   }

//   render() {
//     let pizzasItem = this.state.pizzas.map((v, k) => {
//       return <Picker.Item key={k} value={k} label={v.nome} />;
//     });
//     return (
//       <View style={styles.container}>
//         <Text style={styles.logo}>Menu Pizza</Text>
//         <Picker
//           selectedValue={this.state.pizza}
//           onValueChange={(itemValue, itemIndex) =>
//             this.setState({ pizza: itemValue })
//           }
//         >
//           {pizzasItem}
//         </Picker>
//         <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
//         <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   logo: {
//     textAlign: 'center',
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   pizzas: {
//     marginTop: 15,
//     fontSize: 25,
//     textAlign: 'center',
//   },
// });

// FlatList
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feed: [
//         { id: '1', nome: 'Arturj', idade: 21, email: 'artur@email.com' },
//         { id: '2', nome: 'Ana', idade: 22, email: 'ana@email.com' },
//         { id: '3', nome: 'Henrique', idade: 39, email: 'henr@email.com' },
//         { id: '4', nome: 'Paula', idade: 32, email: 'paula@email.com' },
//         { id: '5', nome: 'JOSE', idade: 12, email: 'jose@email.com' },
//       ],
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.feed}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => <Pessoas data={item} />}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

//ScrollView

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} scrollEnabled={true}>
//           <View style={styles.box1}></View>
//           <View style={styles.box2}></View>
//           <View style={styles.box3}></View>
//           <View style={styles.box4}></View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box1: {
//     backgroundColor: 'red',
//     height: 250,
//   },
//   box2: {
//     backgroundColor: 'green',
//     height: 250,
//   },
//   box3: {
//     backgroundColor: 'yellow',
//     height: 250,
//   },
//   box4: {
//     backgroundColor: 'blue',
//     height: 250,
//   },
// });

// Input que mostra texto

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: '',
//       input: '',
//     };
//     this.entrar = this.entrar.bind(this);
//   }

//   entrar() {
//     if (this.state.input === '') {
//       this.setState({ nome: '' });
//       alert('Digite seu nome!');
//     } else {
//       this.setState({ nome: 'Bem vindo ' + this.state.input });
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite seu nome"
//           underlineColorAndroid="transparent"
//           onChangeText={texto => this.setState({ input: texto })}
//         />
//         <Button title="Entrar" onPress={this.entrar} />
//         <Text style={styles.texto}>{this.state.nome}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   area: {
//     marginTop: 40,
//   },
//   textoPrincipal: {
//     fontSize: 25,
//     color: 'red',
//   },
//   alinhaTexto: {
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20,
//     padding: 10,
//   },
//   texto: {
//     textAlign: 'center',
//     fontSize: 25,
//   },
// });

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.titulo}</Text>
      </View>
    );
  }
}
