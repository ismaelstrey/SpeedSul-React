import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";
import BarraNavegacao from './BarraNavegacao';


const detalhesClientes = require("../img/detalhe_cliente.png");
const cliente1 = require("../img/cliente1.png");
const cliente2 = require("../img/cliente2.png");


export default class CenaClientes extends Component {
    

        render() {
          return <View style={styles.Background}>
                <StatusBar 
                backgroundColor="#B9C941" 
                />

            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo= '#B9C941'/>
                
                <View style={styles.clientesBackground}>
                  <View style={styles.nossosClientes}>
                    <Image source={detalhesClientes} />
                    <Text style={styles.nossosClientesText}>
                      Nossos Clientes
                    </Text>
                  </View>

                  <View style={styles.cliente}>
                    <Image source={cliente1} />
                        <Text style={styles.clienteText}>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Totam odit quo reiciendis
                      aspernatur
                    </Text>
                  </View>

                  <View style={styles.cliente}>
                    <Image source={cliente2} />
                        <Text style={styles.clienteText}>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Totam odit quo reiciendis
                      aspernatur
                    </Text>
                  </View>
                </View>
              </View>;
        }
}
const styles = StyleSheet.create({
    clientesBackground: {
        backgroundColor: "#FFF",
        
    },
  nossosClientes: {
    margin: 10,
    flexDirection: "row"
  },
  nossosClientesText: {
    margin: 10,
    fontSize: 30,
    color: "#B9C941",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cliente: {
      margin: 20,
  },
  clienteText: {
        margin: 20,
        paddingLeft: 15,
        fontSize: 15,
      color: '#063e8b'
    },
  Background: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
