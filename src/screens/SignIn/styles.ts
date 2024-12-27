import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../globalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: Colors.backgroundLightGray,
	},
	box: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		width: width * 0.9,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	title: {
		fontSize: 32,
		color: Colors.accentYellow,
	},
	description: {
		fontSize: 18,
		marginBottom: 24,
		color: Colors.textSecondary,
	},
	registerText: {
		fontSize: 16,
		color: '#007bff',
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
		padding: 15,
		borderWidth: 1,
		borderColor: Colors.textSecondary,
		borderRadius: 10,
		marginTop: 20,
		fontSize: 18,
		paddingLeft: 16,
	},
	logo: {
		width: 190,
		height: 56,
		marginBottom: 20,
	},
	register: {
		flexDirection: 'row',
		marginTop: 16,
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 24,
	},
	text: {
		color: Colors.textSecondary,
		fontSize: 18,
	},
	signInText: {
		color: Colors.textPrimary,
		fontWeight: '500',
	},
	hl: {
		borderBottomWidth: 0.8,
		borderBottomColor: '#ccc',
		width: width * 0.32,
		marginVertical: 16,
	},
	hlRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	orText: {
		marginHorizontal: 8,
		color: '#666',
		fontSize: 14,
	},
	forgotPasswordContainer: {
		alignSelf: 'flex-end',
		marginRight: 4,
		marginTop: 2,
	},
	forgotPassword: {
		color: Colors.primaryBlue,
		fontSize: 16,
	},
});

export default styles;
