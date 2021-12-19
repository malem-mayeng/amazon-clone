import { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './Product Details/ProductDetails';
import ProductPreview from './Product Preview/ProductPreview';
import TopBar from './Topbar/TopBar';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currentFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentFeature: pos})
  }

  render(){

    return (
      <div className="App">
        <TopBar/>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                            currentFeature={this.state.currentFeature} />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.ProductData}
                            onColorOptionClick={this.onColorOptionClick}
                            currentPreviewImagePos={this.state.currentPreviewImagePos}
                            onFeatureItemClick={this.onFeatureItemClick}
                            currentFeature= {this.state.currentFeature} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
