import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from "reselect";
import './Directory.scss'
import { selectDirectorySelections } from '../../redux/directory/directory.selector';

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherParameter }) => {
        return <MenuItem key={id} {...otherParameter} />
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections,
})

export default connect(mapStateToProps)(Directory);