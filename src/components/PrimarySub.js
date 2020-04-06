// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// STYLES DEPENDENCIES
import './styles/PrimarySub.scss';

export default class PrimaySub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArray: [],
      timeIds: [],
    };
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.setState({
      textArray: this.props.children.split(' '),
      timeIds: [], // This array will behave like a Queue
    });
  }

  handleHover(e) {
    e.persist(); // Keep the event alive while the aynchonous call

    if (e.target.classList.contains('primary-sub__top')) {
      e.target.parentNode.classList.add('primary-sub__word--active');

      // Push the timeId associate with the setTimeout() to the timeIds array
      this.setState({
        timeIds: [
          ...this.state.timeIds,
          // This is an example of reference transparency, setTimeout() returns a timeoutId.
          setTimeout(() => {
            // Remove the timeId that already run
            const [, ...body] = [...this.state.timeIds];
            this.setState({
              timeIds: body,
            });
            e.target.parentNode.classList.remove('primary-sub__word--active');
          }, 2000),
        ],
      });
    }
  }

  componentWillUnmount() {
    // Remove the uncalled timeIds
    this.state.timeIds.forEach((id) => {
      clearTimeout(id);
    });
  }

  render() {
    return (
      <sub className="primary-sub">
        {this.state.textArray.map((word, index) => {
          return (
            <div
              className="primary-sub__word"
              key={index}
              onMouseOver={this.handleHover}>
              <div className="primary-sub__top">{word}</div>
              <div className="primary-sub__bottom">{word}</div>
            </div>
          );
        })}
      </sub>
    );
  }
}

PrimaySub.propTypes = {
  children: PropTypes.string.isRequired,
};
