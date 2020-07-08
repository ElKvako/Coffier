import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Feedback from "./feedback";


export default function App() {

  const [gramsOfCoffee, setGramsOfCoffee] = React.useState(21);

  function calculateWater(gramsOfCoffee){
    let result = parseInt(gramsOfCoffee) * 16.666
    return result
  }

  let recipe=[
    { duration: 3000, message: `Step 1: Pour ${gramsOfCoffee * 2} of water` },
    { duration: 3000, message: "Step 2: Stir for 5 seconds" },
    { duration: 3000, message: "Step 3: Wait" },
    { duration: 3000, message: "Step 4: Pour water to the top of Aeropress" },
    { duration: 3000, message: "Step 5: Stir for 15 seconds" },
    { duration: 3000, message: "Step 6: Wait a little longer" },
    { duration: 3000, message: "Step 7: Gently push the Aeropress down" },
    { duration: 3000, message: "Step 8: Pour remaining water" },
    { duration: 3000, message: "Step 9: Push" }
    ]

  return (
    <View style={styles.container}>
      <Text>Coffier!</Text>
      <View>
        <NumericInput 
          type='plus-minus' 
          value={gramsOfCoffee} 
          onChange={value => setGramsOfCoffee(value)}
          minValue={0}
          maxValue={100}
          />
        <Text>You need {calculateWater(gramsOfCoffee).toFixed(0)} grams of water</Text>
      </View>
      <Feedback gramsOfCoffee={gramsOfCoffee} recipe={recipe}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
