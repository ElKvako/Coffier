import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';



export default function (props) {

	const [stateOfBrewing, setStateOfBrewing] = React.useState(0);
	const [finished, setFinished] = React.useState(false);

	function getMessage(){
		let message = props.recipe[stateOfBrewing].message
		if (!finished){
			return message
		} else {
			return "Finished!"
		}
		
	}

	function nextStep(){
		if (stateOfBrewing === props.recipe.length-1) {
			setFinished(true)
		} else {
			setStateOfBrewing(stateOfBrewing+1)
		}
		console.log(finished, stateOfBrewing, props.recipe.length-1)
	}

	function restart(){
		setFinished(false)
		setStateOfBrewing(0)
	}


	function controlButton(){
		if (stateOfBrewing === 0 && !finished){
			return <Button title="Start brewing" onPress={nextStep}/>
		} else if (stateOfBrewing !== 0 && !finished){
			return <Button title="Next step" onPress={nextStep}/>
		} else if (finished){
			return <Button title="Restart" onPress={restart}/>
		}
	}

	function progressBar(){
		
		return <ProgressBar progress={0.2} color={Colors.red800} />
	}
	

	return(
	<View style={styles.feedback}>
		{controlButton()}
		<Text>{getMessage()}</Text>
		{ progressBar() }	
	</View>
	) 
}

const styles = StyleSheet.create({
	feedback: {
	width: "100%",
	padding: 16
	}
});