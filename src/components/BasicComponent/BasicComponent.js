import React from 'react';
import './BasicComponent.css';

class BasicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello '
    };
  }

  render() {
    return (<div className="BasicComponent">
      <h2>{this.state.text}{this.props.name}</h2>
    </div>);
  }
}

export default BasicComponent;
