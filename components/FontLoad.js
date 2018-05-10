import React from 'react';
import { Font } from 'expo';

async function FontLoad() {
  await Font.loadAsync({
    'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
    'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
    'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
    'source-sans': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
    'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
  })
  return true
}

export { FontLoad }
