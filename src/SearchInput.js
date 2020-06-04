import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";


export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input style={inputStyle} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
const inputStyle={
    height: '38px',
    width:'98%',
    marginLeft : '10px'
}
