import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class Grade extends Component {
    constructor(props){
      super(props)
      this.state = {
        tugas:0,
        UTS:0,
        UAS:0,
        na:0,
        grade:''
      };
    }

    tampilGrade=()=>{
      if(this.state.na >= 90){
        this.setState({grade:'A'})
      }
      else if (this.state.na >= 70){
        this.setState({grade:'B'})
      }
      else if (this.state.na >= 60){
        this.setState({grade:'C'})
      }
      else if (this.state.na >= 50){
       this.setState({grade:'D'})
      }
      else {
        this.setState({grade:'E'})
      }
    }
  
    render() {
      const { navigation } = this.props
      var int1 = parseFloat(this.state.tugas);
      var int2 = parseFloat(this.state.UTS);
      var int3 = parseFloat(this.state.UAS);
      return (  
        <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
  
          <View style={{backgroundColor:'#2196f3'}}>
             <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
              Menghitung Grade
            </Text>
           </View>
          
          <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai tugas"
                onChangeText={(tugas)=>this.setState({tugas})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai UTS"
                onChangeText={(UTS)=>this.setState({UTS})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai UAS"
                onChangeText={(UAS)=>this.setState({UAS})}
                keyboardType = 'numeric'
              />
              <View style={{margin:10}}>
              <Button
                onPress={()=>this.setState({
                  na: (int1+int2+int3)/3
                })}
                title="Hitung Nilai Akhir"
                accessibilityLabel="Klik untuk menghitung"               
              />
              </View>
              <View style={{margin:10}}>
              <Button
              onPress={this.tampilGrade}
              title="Tampil Grade"
              accessibilityLabel="Klik untuk menghitung"               
              />
              </View>
              <View style={{margin:10}}>
              <Button title="Back to Home" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
           <Text style = {{padding: 10, fontSize: 20}} >
               Nilai TUGAS   =  {this.state.tugas} {"\n"}
               Nilai UTS   =  {this.state.UTS} {"\n"}
               Nilai UAS   =  {this.state.UAS} {"\n"}
               Nilai Akhir  =  {this.state.na} {"\n"}
               Grade = {this.state.grade}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})