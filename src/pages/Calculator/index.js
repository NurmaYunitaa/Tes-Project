import react, { Component } from "react";
import React, {useState}  from "react";
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export default function Calculator() {
    
    const [angka1, setAngka1] = useState(' ');
    const [angka2, setAngka2] = useState(' ');
    const [tambah, setTambah] = useState(false);
    const [kurang, setKurang] = useState(false);
    const [kali, setKali] = useState(false);
    const [bagi, setBagi] = useState(false);
    const pertambahan = () => {
        setTambah(!tambah);
    }
    const pengurangan = () => {
        setKurang(!kurang);
    }
    const perkalian = () => {
        setKali(!kali);
    }
    const pembagian = () => {
        setBagi(!bagi);
    }
    var int1 = parseFloat(angka1);
    var int2 = parseFloat(angka2);
    return (
        <View style={style.container}>
            <Text>Angka 1</Text>
            <TextInput keyboardType='numeric' 
            style={style.borderinput}
            placeholder='Masukkan Angka 1'
            onChangeText={(val)=>setAngka1(val)}
            />
            <Text></Text>

            <Text>Angka 2</Text>
            <TextInput keyboardType='numeric' 
            style={style.borderinput}
            placeholder='Masukkan Angka 2'
            onChangeText={(val)=>setAngka2(val)}
            />
            <Text></Text>

            <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}>
                <Button
                title={tambah?'Hapus':' + '}
                onPress={pertambahan}
                />

                <Button
                title={kurang?'Hapus':' - '}
                onPress={pengurangan}
                />

                <Button
                title={kali?'Hapus':'x'}
                onPress={perkalian}
                />

                <Button
                title={bagi?'Hapus':' : '}
                onPress={pembagian}
                />
            </View>

            <Text>Hasil: </Text>
            <Text sytle={style.logBox}>
                {tambah?
            <Text>{int1+int2}</Text>:null}
            {kurang?
            <Text>{int1-int2}</Text>:null}
            {kali?
            <Text>{int1*int2}</Text>:null}
            {bagi?
            <Text>{int1/int2}</Text>:null}
            </Text>
            </View>
    );
}

const style = StyleSheet.create({container: {
    flex: 1,
    padding: 8,
    width: 200,
},
    borderinput:{
        borderWidth: 1,
        padding: 6,
        width: 200,
        alignItems:'center'
    },
    text: {
        fontSize: 16
    },
    logBox: {
        padding: 6,
        width: 200,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'red'
    }
})
