import React from 'react';
import classNames from 'classnames';

export default class ContentsWebUsage extends React.Component {

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

        <div className="iconSection">
          <div className="title text-center">IP Address</div>
          <div className="value text-center">{this.props.data.ip}</div>
        </div>

        <div className="iconSection">
          <div className="title text-center">Operating System</div>
          <div className="value text-center">{this.props.data.os}</div>
        </div>

        <div className="iconSection">
          <div className="title text-center">Language</div>
          <div className="value text-center">{this.props.data.lang}</div>
        </div>

      </div>
    )
  }
}
