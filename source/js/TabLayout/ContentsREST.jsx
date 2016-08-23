import React from 'react';
import classNames from 'classnames';

export default class ContentsREST extends React.Component {

  // Component constructor.
  constructor() {
    super();
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
        This has the contents of the REST API tab.
      </div>
    )
  }
}
