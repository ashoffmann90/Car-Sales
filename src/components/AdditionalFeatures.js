import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addNewFeature} from '../actions/featureActions'
import {connect} from 'react-redux'

const AdditionalFeatures = props => {

  const add = item => {
    props.addNewFeature(item)
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature add={add} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addNewFeature})(AdditionalFeatures)
