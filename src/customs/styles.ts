import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../globalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primaryBlue,
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 26,
		justifyContent: 'space-around',
		width: width / 1.24,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 16,
	},
	buttonText: {
		color: Colors.surfaceWhite,
		fontSize: 20,
		letterSpacing: 1,
	},
});

export default styles;
