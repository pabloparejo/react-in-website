'use strict';

const e = React.createElement;

class PageTitle extends React.Component {

  render() {

    return e(
      'h1',
      null,
      'Hello from react!!'
    );
  }
}

const domContainer = document.querySelector('#title-container');
ReactDOM.render(e(PageTitle), domContainer);
