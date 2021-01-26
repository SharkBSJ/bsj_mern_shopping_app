/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { WebView } from 'react-native-webview';

const WEB_URL = 'http://192.168.42.166:3000'

const App: () => React$Node = () => {
  return (
    <>
      <WebView source= {{uri: WEB_URL}}/>
    </>
  );
};

export default App;
