import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";
import BarraNavegacao from './BarraNavegacao';


const imgLogo = require("../img/logo.png");
const menuCliente = require("../img/menu_cliente.png");
const menuContato = require("../img/menu_contato.png");
const menuEmpresa = require("../img/menu_empresa.png");
const menuServico = require("../img/menu_servico.png");

export default class CenaPrincipal extends Component {
    

        render() {
            return <View>
                <StatusBar backgroundColor="#CA2B25" />
                <BarraNavegacao corDeFundo="#CA2B25" />
                <View style={styles.imgLogo}>
                  <Image source={imgLogo} />
                </View>

                <View style={styles.menu}>
                  <View style={styles.menuGrupo}>
                    <TouchableHighlight underlayColor={"#b9c941"} activeOpacity={0.3} onPress={() => {
                        this.props.navigator.push({
                          id: "clientes"
                        });
                      }}>
                      <Image style={styles.menuCliente} source={menuCliente} />
                    </TouchableHighlight>

                  <TouchableHighlight underlayColor={"#61BD8C"} activeOpacity={0.3} onPress={() => {
                        this.props.navigator.push({
                          id: "contato"
                        });
                      }}>
                      <Image style={styles.menuContato} source={menuContato} />
                    </TouchableHighlight>
                  </View>

                  <View style={styles.menuGrupo}>
                  <TouchableHighlight underlayColor={"#ec7148"} activeOpacity={0.3} onPress={() => {
                        this.props.navigator.push({
                          id: "empresa"
                        });
                      }}>
                      <Image style={styles.menuEmpresa} source={menuEmpresa} />
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor={"#19d1c8"} activeOpacity={0.3} onPress={() => {
                        this.props.navigator.push({
                          id: "servicos"
                        });
                      }}>
                      <Image style={styles.menuServico} source={menuServico} />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>;
        }
}
const styles = StyleSheet.create({
  imgLogo: {
       
    alignItems: "center"
  },
  menu: {
alignItems: 'center',
  },
    menuGrupo: {
flexDirection: 'row',
    },
    menuCliente: {
margin: 15,
    },
    menuContato: {
        margin: 15,
    },
    menuEmpresa: {
        margin: 15,
    },
    menuServico: {
        margin: 15,
    }
});

