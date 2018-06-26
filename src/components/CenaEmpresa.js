import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";
import BarraNavegacao from './BarraNavegacao';


const detalheEmpresa = require("../img/detalhe_empresa.png");



export default class CenaContato extends Component {
    

        render() {
          return <View style={styles.Background}>
              <StatusBar backgroundColor="#ec7148" />

              <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#ec7148" />

              <View style={styles.empresasBackground}>
                <View style={styles.empresa}>
                  <Image source={detalheEmpresa} />
                  <Text style={styles.empresaText}>Empresa</Text>
                </View>

                <View style={styles.empresa}>
                  <Text style={styles.txt}>
                    Nossa empresa é uma empresa experiente com mais de
                    20 anos de experiencia.
                  </Text>
                </View>
              </View>
            </View>;
        }
}
const styles = StyleSheet.create({
    empresasBackground: {
        backgroundColor: "#FFF",
        
    },
  empresa: {
    margin: 10,
    flexDirection: "row"
  },
  empresaText: {
    margin: 10,
    fontSize: 30,
    color: "#EC7148",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txt:{
    fontSize: 20,
  },
  Background: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
