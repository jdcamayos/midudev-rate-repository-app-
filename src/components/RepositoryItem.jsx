import { Image, View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

function RepositoryItemHeader(props) {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2 }}>
			<View style={{ paddingRight: 10 }}>
				<Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
			</View>
			<View style={{ flex: 1 }}>
				<StyledText fontWeight='bold'>{props.fullName}</StyledText>
				<StyledText color='secondary'>{props.description}</StyledText>
				<StyledText style={styles.language}>Language: {props.language}</StyledText>
			</View>
		</View>
	)
}

export default function RepositoryItem(props) {
	return (
		<View key={props.id} style={styles.container}>
			<RepositoryItemHeader {...props} />
			<RepositoryStats {...props} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		marginVertical: 4,
		borderRadius: 4,
		overflow: 'hidden',
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4,
	},
})
