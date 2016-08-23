import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class ContentsWebUsage extends React.Component {

  // Component constructor.
  constructor() {
    super();

    this.state = {
      ip: null,
      os: null,
      lang: null
    }
  }

  // Execute when component is done loading.
  componentDidMount() {

    // Keep a reference to this component (<ContentsWebUsage/>).
    var thisComp = this;

    // Perform an HTTP GET request at the /identify route.
    var jqxhr = $.getJSON('/identify');

    // When the GET request is successful, update the state from the data from
    // the response.
    jqxhr.done(function(data) {

      // Update the state of this component with the data from the HTTP GET
      // request.
      thisComp.setState({
        ip: data.ipaddress, // Get IP Address.
        os: data.software,  // Get Operating System.
        lang: data.language // Get Language.
      });

    });// end .done().

  }

  // Component render.
  render() {

    // Component render classes.
    var myClasses = classNames({
      'container-tabcontents': true,
      'hidden': !this.props.visible // Hide the class if it is not supposed to be visible.
    });

    return (
      <div className={myClasses}>

        <div>IP Address: {this.state.ip}</div>

        <div>Operating System: {this.state.os}</div>

        <div>Language: {this.state.lang}</div>

      </div>
    )
  }
}
