import React from 'react';

// Sub-components.
import Tab from './Tab.jsx';

export default class TabContainer extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {
    return (
      <div className="container-tabs">

        <Tab
          name="Web Usage"
          tabId={1}
          active={this.props.currentTab == 1}
          handleClick={this.props.handleClick}
          />

        <Tab
          name="REST API"
          tabId={2}
          active={this.props.currentTab == 2}
          handleClick={this.props.handleClick}
          />
        
      </div>
    )
  }

}
