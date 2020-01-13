import * as React from 'react';
import PropTypes from 'prop-types';

class StatusLabel extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'completed'
    }
  }

  render() {
    return <div>
      status is { this.state.status }
    </div>
  }

}

export default StatusLabel;
