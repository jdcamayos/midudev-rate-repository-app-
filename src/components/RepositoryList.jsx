import { FlatList, Text } from 'react-native'
import { useRepositories } from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'

export default function RepositoryList() {
	const { repositories } = useRepositories()

	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text />}
			renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
		/>
	)
}
