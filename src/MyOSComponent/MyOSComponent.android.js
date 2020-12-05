/*
Компонент запустится на Android
Данный файл более приоритетный чем .js и .native.js
*/
import React from 'react';
import { View, Text } from 'react-native';

export default MyOSComponent = () => {
	return (
		<View>
			<Text>This component runing on Android</Text>
		</View>
	)
}