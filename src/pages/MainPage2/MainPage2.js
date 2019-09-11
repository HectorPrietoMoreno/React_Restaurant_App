import React from 'react';
import './MainPage2.css';
import BasicComponent from '../../components/BasicComponent/BasicComponent'

class MainPage2 extends React.Component {
  onClickButton = () => {
    this.props.history.push('/')
  }
  render () {
    return (
      <div className="MainPage2">
        <h1>Hello MainPage2!</h1>
        <BasicComponent name="BasicName2"></BasicComponent>
        <button onClick={this.onClickButton}>Go to MainPage</button>
      </div>
    );
  }
}

export default MainPage2;
