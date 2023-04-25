import React, { Fragment } from 'react';

import  ReactDOM  from 'react-dom';
import './Model.css';

const BackDrop = props => {
    return ( <div className='backdrop' onClick={props.onClose} />
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
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
  )
}

export default Model