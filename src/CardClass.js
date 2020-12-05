/*
Познакомимся с props - это свойства компонента
Здесь работа с props для компонента в виде класса
---------------------
Оличие от функции: 
к props обращаемя через this
props по умолчанию задаем через static
*/
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'

export class CardClass extends Component {

	/*Props по умолчанию*/
	static defaultProps = {
		userName: 'Неизвестный пользователь',
		logIn: 'false',
		photo: 'https://picsum.photos/id/4/70'
	}

	
	render () {
		/*Деструктуризация Props*/
		const { userName, photo, logIn, children } = this.props
		return(
			<View style={styles.card}>

				<View style={styles.userInfo}>
					<Image style={styles.userPhoto}
						source={require('../assets/stich.png')} />
					{/*Получаем значения props*/}
					<Text>{userName}, logIn-{logIn.toString()}</Text>
				</View>
				{/*Берем путь к картинче через props - uri*/}
				<View style={styles.photoContainer}>
					<Image style={styles.photo}
						source={{ uri: photo }} />
				</View>
				<View style={styles.buttonContainer}>
					{/*Событие onPress*/}
					<Button title="Нравится" onPress={() => Alert.alert(`Вы оценили фото ${userName}`)} />
				</View>
				{/*Получить вложенные компоненты*/}
				<View style={styles.description}>{children}</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		marginTop: 30,
		backgroundColor: 'gold'
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	},
	userPhoto: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	uerName: {
		marginHorizontal: 10
	},
	photoContainer: {
		aspectRatio: 1
	},
	photo: {
		...StyleSheet.absoluteFill
	},
	buttonContainer: {
		alignItems: 'flex-start',
		paddingHorizontal: 10
	},
	description: {
		paddingHorizontal: 10,
		alignItems: 'center'
	}
})