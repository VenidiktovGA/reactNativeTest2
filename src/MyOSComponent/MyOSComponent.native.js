/*
Компонент запустится на Android or IOS
Данный файл более приоритетный чем .js
*/
import React from 'react';
import {View, Text} from 'react-native';

export default MyOSComponent = () => {
	return(
		<View>
			<Text>This component runing on Android or IOS</Text>
		</View>
	)
}