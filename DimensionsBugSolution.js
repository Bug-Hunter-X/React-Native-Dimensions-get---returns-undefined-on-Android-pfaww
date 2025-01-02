import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(undefined);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });

    const initialDimensions = Dimensions.get('window');
    setDimensions(initialDimensions);

    return () => subscription?.remove();
  }, []);

  if (!dimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Window Width: {dimensions.window.width}</Text>
      <Text>Window Height: {dimensions.window.height}</Text>
      <Text>Screen Width: {dimensions.screen.width}</Text>
      <Text>Screen Height: {dimensions.screen.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution; 
