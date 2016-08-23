import React from 'react';
import classNames from 'classnames';

export default class Description extends React.Component {

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {

    var myClasses = classNames({
      'description': true,
      'text-center': true,
    });

    return (
      <div className={myClasses}>

        <h1>Request Header Parser</h1>

        <h3>
          Every time you access a website, the browser sends data about itself to that website. This data are known as "HTTP Headers".
        </h3>

        <h3>
          These headers contain information about the browser such as the default language, IP address, page which referred you to the site, the operating system you are running, etc.
        </h3>

        <h3>
          This application will display the IP address, Operating System, and Language of the user accessing this site.
        </h3>
      </div>
    )
  }
}
