import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

function AppBarTab({ children, to }) {
	const { pathname } = useLocation()
	const active = pathname === to
	const textStyles = [styles.text, active && styles.active]
	return (
		<Link to={to}>
			<StyledText fontWeight='bold' style={textStyles}>
				{children}
			</StyledText>
		</Link>
	)
}

export default function AppBar() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal style={styles.scroll}>
				<AppBarTab active to='/'>
					Repositories
				</AppBarTab>
				<AppBarTab to='/signin'>Sign In</AppBarTab>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'red',
		paddingTop: Constants.statusBarHeight + 10,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	scroll: {
		paddingBottom: 15,
	},
	text: {
		color: theme.appBar.textSecondary,
		paddingHorizontal: 10,
	},
	active: {
		color: theme.appBar.textPrimary,
	},
})
