import React from 'react';
import './MainPage.css';
import BasicComponent from '../../components/BasicComponent/BasicComponent'

class MainPage extends React.Component {
  render () {
    return (
      <div className="MainPage">
        <h1>Hello MainPage!</h1>
        <BasicComponent name="BasicName"></BasicComponent>
      </div>
    );
  }
}

export default MainPage;
