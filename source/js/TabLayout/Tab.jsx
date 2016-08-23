import React from 'react';
import classNames from 'classnames';

export default class Tab extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  setActiveTab() {

    this.props.handleClick(this.props.tabId);

  }

  // Component render.
  render() {

    var myClasses = classNames({
      'tab': true,
      'text-center': true,
      'active': this.props.active
    });

    return (
      <div className={myClasses} onClick={this.setActiveTab.bind(this)}>
        {this.props.name}
      </div>
    )
  }
}
