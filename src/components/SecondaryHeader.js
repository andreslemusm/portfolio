// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// STYLES DEPENDENCIES
import './styles/SecondaryHeader.scss';

// NEW ANIMATION:
//  1. Make one in Portfolio.scss
//  2. Pass a prop with name preceed by ' ' (ex: ' slide-right')
export default class SecondaryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 200);
  }

  render() {
    return (
      <h2
        className={`secondary-header${
          this.state.loading ? this.props.animation : ''
        }`}>
        {this.props.children}
      </h2>
    );
  }
}

SecondaryHeader.propTypes = {
  children: PropTypes.string,
  animation: PropTypes.string,
};
