import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'#bbdefb' }}>
                <View style={{ margin: 15 }}>
                <Button title="SEGITIGA"
                onPress={ () => navigation.replace("Segitiga")}
                />
                </View>

                <View style={{ margin: 15 }}>
                <Button title="PERSEGI"
                onPress={ () => navigation.replace("Persegi")}
                />
                </View>

                <View style={{ margin: 15 }}>
                <Button title="LINGKARAN"
                onPress={ () => navigation.replace("Lingkaran")}
                />
                </View>

                <View style={{ margin: 15 }}>
                <Button title="GRADE"
                onPress={ () => navigation.replace("Grade")}
                />
                </View>
            </View>
            
        )
        
    }
   }     

const styles = StyleSheet.create({})