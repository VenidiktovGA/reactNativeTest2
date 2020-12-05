import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyFuncComponent from './src/MyFuncComponent';
import MyArrowFuncComponent from './src/MyArrowFuncComponent';
import MyClassComponent from './src/MyClassComponent';
import MyOSComponent from './src/MyOSComponent/MyOSComponent';
import Card from './src/Card'
import {CardClass} from './src/CardClass'


/*
*/

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView>
			{/*
			<MyFuncComponent />
			<MyArrowFuncComponent />
			<MyClassComponent />*/}
			<Card userName={'Геннадий'} 
			logIn 
					photo='https://picsum.photos/id/500/70'/>
			{/*Если props это строка то можно обойтись без фигурных скобок,
			если props bool то можно писать только имя props*/}
				<Card userName="Марина" logIn/>
			<Card >
				<Text>1</Text>
				<Text>2</Text>
				<Text>3</Text>
			</Card>
				<CardClass userName='Компонент Класс'/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		/*flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'*/
	},
});
