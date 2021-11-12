import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Button,
   Text, TextInput,
   View
 } from 'react-native';
 
 export default class Segitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    const { navigation } = this.props
    return (  
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas Segitiga
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan alas"
              onChangeText={(alas)=>this.setState({alas})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
            <View style={{margin:15}}>
            <Button
              onPress={()=>this.setState({
                luas: (this.state.alas*this.state.tinggi/2)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
            </View>
            <View style={{margin:15}}>
            <Button title="Kembali" onPress={ () => navigation.replace('Home')}/>
            </View>
       </View>

      <View style={{margin:20, backgroundColor:'#90caf9'}}>
         <Text style = {{padding: 10, fontSize: 20}} >
             alas =  {this.state.alas} {"\n"}
             tinggi =  {this.state.tinggi} {"\n"}
             Luas = {this.state.luas}
         </Text>
      </View>       
   </View>   
    );
  }
}
 const styles = StyleSheet.create({})
 
 
 
 
 
 
 