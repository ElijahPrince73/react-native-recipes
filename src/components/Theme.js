import React from 'react'
import { View, StyleSheet } from 'react-native'

const Theme = ({ children }) => (
  <View style={styles.theme}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  theme: {
    margin: 15
  }
})

export default Theme