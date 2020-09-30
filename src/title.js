'use strict';

class PageTitle extends React.Component {

  render() {

    return React.createElement(
      'h1',
      null,
      'Hello from react!!'
    );
  }
}

const domContainer = document.querySelector('#title-container');
ReactDOM.render(React.createElement(PageTitle), domContainer);
