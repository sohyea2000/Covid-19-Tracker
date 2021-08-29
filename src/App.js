import React from 'react';

import Cards from './components/cards/Cards';
import Charts from './components/charts/Charts';
import Countrypicker from './components/countrypicker/Countrypicker';
import styles from './App.module.css';
import {fetchData} from './api/index';

import image from './images/image.png';

class App extends React.Component{
  state = {
    data : {},
    country: '',
  }
  async componentDidMount (){
    const data = await fetchData();
    this.setState({data});
    
  }
  handleCountryChange = async(country) => {
    const data = await fetchData(country);
    this.setState({data,country: country})
  }
  render(){ 
    const {data,country} = this.state;
    return(
      <div className = {styles.container}>
         <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}></Cards>
        <Charts data = {data} country={country}></Charts>
        <Countrypicker handleCountryChange = {this.handleCountryChange}></Countrypicker>
      </div>
    )
  }
}

export default App;
