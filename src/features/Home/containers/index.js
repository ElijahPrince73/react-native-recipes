import React, { Component } from 'react';
import {
  View, Text, FlatList, StyleSheet

} from 'react-native';
import { connect } from 'react-redux';

import { listLatestMeals } from './homeReducer';

class MealsList extends Component {
  componentDidMount() {
    const { listLatestMeals } = this.props;
    listLatestMeals();
  }

  renderItems = ({ item }) => <Text>{item.strMeal}</Text>

  render() {
    const { meals } = this.props;
    console.log(meals);
    return (
      <View style={styles.container}>
        <Text>Heere</Text>
        <FlatList
          styles={styles.container}
          data={meals}
          renderItem={this.renderItems}
          keyExtractor={(item) => item.idMeal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = (state) => ({
  meals: state.homeReducer.meals
});

const mapDispatchToProps = {
  listLatestMeals
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
