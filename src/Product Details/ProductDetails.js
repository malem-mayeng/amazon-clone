// import React from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
  
  // set classes for color options
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick= {() => props.onColorOptionClick(pos)}/>
    )
  })

  // set classes for feature list
  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];

    if(pos === props.currentFeature){
      classArr.push(classes.SelectedFeatureItem);
    }

    return(
      <button key={pos} className={classArr.join(' ')} onClick={()=> props.onFeatureItemClick(pos)}>{item}</button>
    )
  })
  
    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Option</h3>
          <div>
            {colorOptions}
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
          </div>

          <button className={classes.BuyNow}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;