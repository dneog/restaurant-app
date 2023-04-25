import React, { Fragment } from 'react';

import  ReactDOM  from 'react-dom';
import './Model.css';

const BackDrop = props => {
    return ( <div className='backdrop'></div>
    )
}
const ModelOverlay= props=> {
    return ( <div className='modal'>
        <div className='child'>{props.children}</div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');
const Model = (props) => {

  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop />, portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
  )
}

export default Model