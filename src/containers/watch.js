import React, { Component } from 'react';

class Watch extends Component {
  render() {
    const { params } = this.props.match;
    console.log("this paramas", params)
    return <div>
      <h4>About</h4>
      <p>This is About page.</p>
      {/* {params.id ? <b>ID: {params.id}</b> : <i>ID is optional.</i>} */}
    </div>
  }
}

export default Watch;