/*
Познакомимся с props - это свойства компонента
Здесь работа с props для компонента в виде функции
*/
import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, Platform } from 'react-native'
import PropTypes from 'prop-types'; //Пакет для валидации props


{/*Можно деструктуризировать props,
передать те props которые нужны ({userName, people, children})*/}
const Card = (props) => {
	return (
		<View style={styles.card}>

			<View style={styles.userInfo}>
				<Image style={styles.userPhoto} 
					source={require('../assets/stich.png')}/>
					{/*Получаем значения props*/}
				<Text>{props.userName}, logIn-{props.logIn.toString()}</Text>
			</View>
			{/*Берем путь к картинче через props - uri*/}
			<View style={styles.photoContainer}>
				<Image style={styles.photo}
					source={{uri: props.photo}}/>
			</View>
			<View style={styles.buttonContainer}>
				{/*Событие onPress*/}
				<Button title="Нравится" onPress={() => Alert.alert(`Вы оценили фото ${props.userName}`)}/>
			</View>
			{/*Получить вложенные компоненты*/}
			<View style={styles.description}>{props.children}</View>
		</View>
	)
}

{/*props по умолчанию для компонента*/ }
Card.defaultProps = {
	userName: 'Неизвестный пользователь',
	logIn: 'false',
	photo: 'https://picsum.photos/id/724/70'
}

{/*Для валидации props создадим спец. свойство*/ }
{/*
У всез валидатор можно проставить обязательность передачи параметра
PropTypses.array.isRequired - нужно обязательно передать массив в props

--Первая группа валидаторов
PropTypses.array - []
PropTypses.bool - rtue
PropTypses.func - () => {}
PropTypses.number - 10
PropTypses.string - ""
PropTypses.object - {}
PropTypses.symbol - Symbol()

--Вторая группа валидаторов
PropTypses.node - Проаучкает то что может быть отрендерено это [], 10, "", <Компоненты>

--Третий тип валидаторов
PropTypses.element - <Компонент>
PropTypses.elementType - ТипКомпонента

--Четвертый тип валидаторов
PropTypses.enstanceOf(A) - new A() - проверяет чтоб значение было экзэмпляром некого класса

--Пятый тип валидатора
PropTypses.oneOf(["", 10]) - "", 10 проверяет чтобы свойство совпало с одним из значений в списеке

--Шестой тип валидаторов
PropTypses.oneOfType(bool, string) - bool, string проверяет что свойство совпало с одним изи типов данных

--Седьмой тип валидаторов
PropTypses.arrayOf(PropTypses.number) - проверяет чтоб в массиве все значения были обного типа данных
PropTypses.objectOf(PropTypses.number) - проверяет чтоб в объекте все значения были обного типа данных

--Восьмой тип валидаторов
PropTypses.shape({
	key1: PropTypes.string,
	key2: PropsTypes.number
}) - {key1: "", key2: 10} позволяет создать определенную структуру объекта
PropTypses.exact({
	key1: PropTypes.string,
	key2: PropsTypes.number
}) - {key1: "", key2: 10} проверяет что все свойства объекта переданы

--Девятый тип валидатора
PropTypes.any - можем передать все что угодно

--МОЖНО СОЗДАВАТЬ СВОИ ВАЛИДАТОРЫ

*/}
Card.propTypes = {
	userName: PropTypes.string,
	/*Создадим собственный валидатор*/
	//Свой валидатор можно создать для массивов и объектов
	logIn: function(props, propsName, componentName) {
		if(props[propsName].logIn !== 'true') {
			return new Error(`Пользователь ${props.userName} не залогинелся`)
		}
	}
}

export default Card;

const styles = StyleSheet.create({
	card: {
		marginTop: 30,
		/*CSS в зависимости от платформы*/
		...Platform.select({
			ios: {
				backgroundColor: 'red'
			},
			android: {
				backgroundColor: 'orange'
			},
			web: {
				backgroundColor: 'blue'
			}
		})
		
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding:10
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
		/*position:absolute, top:0, right:0,bottom:0,left:0*/
		/*Так можно перекрывать элементы данным элементом*/
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