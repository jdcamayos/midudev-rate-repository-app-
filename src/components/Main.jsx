import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import Login from '../pages/Login'

export default function Main() {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} />
				<Route path='/signin' element={<Login />} />
			</Routes>
		</View>
	)
}
