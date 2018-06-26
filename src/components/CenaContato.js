import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";
import BarraNavegacao from './BarraNavegacao';


const detalhesClientes = require("../img/detalhe_contato.png");


export default class CenaContato extends Component {
    

        render() {
          return <View style={styles.Background}>
              <StatusBar backgroundColor="#61BD8C" />

              <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#61BD8C" />

              <View style={styles.clientesBackground}>
                <View style={styles.nossosContatos}>
                  <Image source={detalhesClientes} />
                  <Text style={styles.nossosContatosText}>
                    Contatos
                  </Text>
                </View>

                <View style={styles.contato}>
                  <Text style={styles.txt}>
                    Telefone: (51)9817-54701
                  </Text>
                  <Text style={styles.txt}>
                    {" "}
                    Celular: (51)9817-54701
                  </Text>
                  <Text style={styles.txt}>
                    {" "}
                    E-mail: ismaelstrey@hotmail.com
                  </Text>
                </View>
              </View>
            </View>;
        }
}
const styles = StyleSheet.create({
  clientesBackground: {
    backgroundColor: "#FFF"
  },
  nossosContatos: {
    margin: 10,
    flexDirection: "row"
  },
  nossosContatosText: {
    margin: 10,
    fontSize: 30,
    color: "#61BD8C",
    fontWeight: "bold",
    textAlign: "center"
  },
  contato: {
    margin: 20,
    padding: 20
  },
  txt: {
    fontSize: 20
  },
  clienteText: {
    margin: 20,
    paddingLeft: 15,
    fontSize: 15,
    color: "#063e8b"
  },
  Background: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
