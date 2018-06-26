import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
} from "react-native";

export default class BarraNavegacao extends Component {
    render() {
        return <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
            
              <Text style={styles.titulo}>Speed</Text>
              <Text style={styles.tituloVermelho}>Sul</Text>
            
          </View>;
    }
}
const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: "#CCC",
    padding: 10,
    height: 70,
    flexDirection: "row",
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000"
  },
  tituloVermelho: {
    fontSize: 30,    
    fontWeight: "bold",
    color: "red"
  }
});
