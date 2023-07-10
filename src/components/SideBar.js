import React from 'react'
import PropTypes from 'prop-types'


export default class SideBar extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.heading}</h3>
      </div>
    );
  }
}

SideBar.propTypes={
  heading: PropTypes.string
}
SideBar.defaultProps ={
  heading:'thisis a heading'
}