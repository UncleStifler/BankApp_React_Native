import { LogBox } from 'react-native'
import Navigation from './app/navigation/Navigation'
import { AuthProvider } from './app/providers/AuthProvider'
import { DataProvider } from './app/providers/DataProvider'

export default function App() {
	return (
		<AuthProvider>
			<DataProvider>
				<Navigation />
			</DataProvider>
		</AuthProvider>
	)
}

LogBox.ignoreAllLogs()
