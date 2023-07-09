import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Header} from "./components/Header";
import Products from "./components/Products";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header />

        <Products />
      </ScrollView>
    </SafeAreaView>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingVertical:20,
    paddingHorizontal: 24,
    backgroundColor: '#1E3445',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
