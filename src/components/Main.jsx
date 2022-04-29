import { View, Text } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'

export default function Main() {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} />
				<Route path='/signin' element={<Text>Working on it</Text>} />
			</Routes>
		</View>
	)
}
