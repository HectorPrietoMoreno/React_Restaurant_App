import React from 'react';
import './MainPage.css';
import BasicComponent from '../../components/BasicComponent/BasicComponent'

class MainPage extends React.Component {
  onClickButton = () => {
    this.props.history.push('/2');
  }
  render () {
    return (
      <div className="MainPage">
        <h1>Hello MainPage!</h1>
        <BasicComponent name="BasicName"></BasicComponent>
        <button onClick={this.onClickButton}>Go to MainPage2</button>
      </div>
    );
  }
}

export default MainPage;
