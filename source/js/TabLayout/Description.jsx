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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sem molestie, ultricies elit non, semper tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi neque, eleifend quis ultricies eu, facilisis non mi. Nam dapibus posuere imperdiet. Fusce feugiat metus vitae dui convallis, a semper dolor facilisis. Aenean scelerisque pulvinar sem, in cursus purus malesuada et. Pellentesque enim neque, vestibulum non mauris sed, rhoncus facilisis purus. Praesent vulputate molestie sem, eget tincidunt purus aliquet sit amet. Integer semper dui dui, a malesuada magna lobortis non. Vestibulum euismod quis tellus non elementum. Nam at neque ut velit pulvinar dignissim. Quisque at mollis odio. Vestibulum quis nulla a neque euismod euismod.

Nam tincidunt a ligula aliquam suscipit. Etiam at sapien ac risus malesuada tincidunt. Curabitur laoreet rhoncus urna quis porta. Cras varius viverra elit quis vehicula. Cras ultrices tortor vel mattis fringilla. Curabitur iaculis tempor tellus sit amet egestas. Cras blandit libero ornare euismod accumsan. Maecenas eget enim id arcu consectetur porttitor at at mi. Nunc consectetur sem vitae justo dignissim, quis scelerisque est tempus.
      </div>
    )
  }
}
