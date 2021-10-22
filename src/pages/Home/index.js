import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Calculator"
                onPress={ () => navigation.replace("Calculator")}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})