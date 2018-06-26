import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet, ScrollView  } from "react-native";
import BarraNavegacao from './BarraNavegacao';


const detalhesServicos = require("../img/detalhe_servico.png");



export default class CenaServicos extends Component {
    

        render() {
          return <ScrollView style={styles.Background}>
              <StatusBar backgroundColor="#19d1c8" />

              <BarraNavegacao corDeFundo="#19d1c8" />

              <View style={styles.servicosBackground}>
                <View style={styles.nossoservicos}>
                  <Image source={detalhesServicos} />
                  <Text style={styles.nossosservicosText}>
                    Servicos
                  </Text>
                </View>

                <View style={styles.servico}>
                  <Text style={styles.txt}>
                    Desenvolvimento de aplicativos.
                  </Text>
                  <Text style={styles.txt}>
                    Desenvolvimento Web sites.
                  </Text>
                  <Text style={styles.txt}>
                    Desenvolvimento de soluçôes.
                  </Text>
                </View>
              </View>
            </ScrollView>;
        }
}
const styles = StyleSheet.create({
  servicosBackground: {
    backgroundColor: "#FFF"
  },
  nossoservicos: {
    margin: 10,
    flexDirection: "row"
  },
  nossosservicosText: {
    padding: 10,
    margin: 10,
    fontSize: 30,
    color: "#19d1c8",
    fontWeight: "bold",
    textAlign: "center"
  },
  txt: {
    margin: 10,
    padding: 10,
    fontSize: 15,
    color: "#068983",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 5,
    borderColor: "#19d1c8",
    borderBottomWidth: 5
  },
  servico: {
    margin: 20
  },
  servicoText: {
    margin: 20,
    paddingLeft: 15,
    fontSize: 15,
    color: "#063e8b"
  },
  Background: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
