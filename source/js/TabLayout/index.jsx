import React from 'react';
import ReactDOM from 'react-dom';

// Import sub-components.
import TabContainer from './TabContainer.jsx';

import ContentsWebUsage from './ContentsWebUsage.jsx';
import ContentsREST from './ContentsREST.jsx';


class TabLayout extends React.Component {

  // Component constructor.
  constructor() {
    super();

    // Sets the default state of this component.
    //
    // By default, tab 1 (Web Usage) is active.
    this.state = {
      currentTab: 1
    }
  }

  // Callback function to set the active tab in the component state.
  changeActiveTab(tabId) {
    this.setState({
      currentTab: tabId
    })
  }

  // Component render.
  render() {
    return (
      <div>
        <TabContainer currentTab={this.state.currentTab} handleClick={this.changeActiveTab.bind(this)}/>
        <ContentsWebUsage visible={this.state.currentTab == 1}/>
        <ContentsREST visible={this.state.currentTab == 2}/>
      </div>
    )
  }
}

// Render to page.
ReactDOM.render(<TabLayout/>, document.getElementById('react-target'));
