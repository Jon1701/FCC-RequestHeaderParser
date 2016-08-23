import React from 'react';
import ReactDOM from 'react-dom';

// Import sub-components.

import Description from './Description.jsx';
import Tab from './Tab.jsx';
import ContentsWebUsage from './ContentsWebUsage.jsx';
import ContentsREST from './ContentsREST.jsx';

import $ from 'jquery';

class TabLayout extends React.Component {

  // Component constructor.
  constructor() {
    super();

    // Sets the default state of this component.
    //
    // By default, tab 1 (Web Usage) is active.
    this.state = {
      currentTab: 1,
      json: {},
      ip: 'Unknown',
      os: 'Unknown',
      lang: 'Unknown'
    }
  }

  // Callback function to set the active tab in the component state.
  changeActiveTab(tabId) {
    this.setState({
      currentTab: tabId
    })
  }

  componentWillMount() {

    var thisComp = this;

    // Perform an HTTP GET request at the /identify route.
    var jqxhr = $.getJSON('/identify');

    // When the GET request is successful, update the state from the data from
    // the response.
    jqxhr.done(function(data) {

      // Update the state of this component with the data from the HTTP GET
      // request.
      thisComp.setState({
        json: JSON.stringify(data),
        ip: data.ipaddress, // Get IP Address.
        os: data.software,  // Get Operating System.
        lang: data.language // Get Language.
      });

    });// end .done().
  }

  // Component render.
  render() {
    return (
      <div>
        <Description/>

        <div className="container-tabs">
          <Tab
            name="via Web"
            tabId={1}
            active={this.state.currentTab == 1}
            handleClick={this.changeActiveTab.bind(this)}
            />

          <Tab
            name="via HTTP GET"
            tabId={2}
            active={this.state.currentTab == 2}
            handleClick={this.changeActiveTab.bind(this)}
            />
        </div>

        <ContentsWebUsage visible={this.state.currentTab == 1} data={this.state}/>
        <ContentsREST visible={this.state.currentTab == 2} data={this.state.json}/>
      </div>
    )
  }
}

// Render to page.
ReactDOM.render(<TabLayout/>, document.getElementById('react-target'));
