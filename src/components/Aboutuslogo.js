import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Aboutuslogo = () => (
  <Image source={require('../assets/tdc300.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 128,
    marginBottom: 322,
  },
});

export default memo(Aboutuslogo);
