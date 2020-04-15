import React from 'react';
import {connect} from 'react-redux'
import AddedFeature from './AddedFeature';
import {removeFeature} from '../actions/featureActions'

const AddedFeatures = props => {

  const removeItem = item => {
    props.removeFeature(item)
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item, index) => (
            <AddedFeature key={index} delete={removeItem} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
