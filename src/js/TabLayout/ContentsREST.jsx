import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class ContentsREST extends React.Component {

  // Component constructor.
  constructor() {
    super();

    // Default state.
    // Server hostname.
    this.state = {
      hostname: null
    }
  }

  // Executes code before component mounts.
  componentWillMount() {

    // Get component reference.
    var thisComp = this;

    // Get the hostname of the server.
    var jqxhr = $.getJSON('/hostname');
    jqxhr.done(function(data) {
      thisComp.setState({
        hostname: data.hostname
      })
    });

  }

  // Component render.
  render() {

    // Component render classes.
    var myClasses = classNames({
      'container-tabcontents': true,
      'text-center': true,
      'hidden': !this.props.visible // Hide the class if it is not supposed to be visible.
    });

    return (
      <div className={myClasses}>

        <div>
          Access the server at <a href={'/identify'}>{this.state.hostname + '/identify'}</a>
        </div>

        <div><br/><br/></div>

        <div>
          {String(this.props.data)}
        </div>

      </div>
    )
  }
}
