import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const Header = ({ title }) => <Text h4 style={styles.header}>{title}</Text> 

const styles = StyleSheet.create({
  header: {
    color: '#F56565',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

export default Header