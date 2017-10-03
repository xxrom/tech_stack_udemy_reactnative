import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { titelStyle } = styles;

    return <CardSection>
      <Text style={titelStyle}>
        {this.props.library.title}
      </Text>
    </CardSection>;
  }
}

const styles = {
  titelStyle: {
    fontSize: 18,
    paddingLeft: 15,

  }
};

export default connect(null, actions)(ListItem);