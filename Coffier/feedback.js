import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

export default function (props) {

	const [stateOfBrewing, setStateOfBrewing] = React.useState(0);
	const [finished, setFinished] = React.useState(false);
	const [progress, setProgress] = React.useState(0);

	function getMessage(){
		let message = props.recipe[stateOfBrewing].message
		if (!finished){
			return message
		} else {
			return "Finished!"
		}	
	}

	function nextStep(){
		if (stateOfBrewing >= props.recipe.length-1) {
			setFinished(true)
		} else {
		 setStateOfBrewing(stateOfBrewing+1)
		 timerProgress()
		}
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

    function timerProgress () {
		let resultTime = props.recipe[stateOfBrewing].duration
		let timer = 0
		let done = 0
		setProgress(0)
		let id = setInterval(step, 50);
		
		function step() {
			if (timer >= resultTime) {
				clearInterval(id);
				timer = 0;
			} else {
				timer = timer + 50;
				done = timer/resultTime
				setProgress(done)
			}
		}
	}

	return(
	<View style={styles.feedback}>
		{controlButton()}
		<Text>{getMessage()}</Text>
		{/* timerProgress(props.recipe[stateOfBrewing].duration) */}
      <ProgressBar progress={progress} color={Colors.red800} />
	</View>
	) 
}

const styles = StyleSheet.create({
	feedback: {
	width: "100%",
	padding: 16
	}
});