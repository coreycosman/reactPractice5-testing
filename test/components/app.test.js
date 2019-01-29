import React from "react";
import ReactDOM from "react-dom";
import App from '../../src/components/app';

it('shows comment box', () => {
  const div = document.create('div');
  ReactDOM.render(<App />, div)

  
  ReactDOM.unmountComponentAtNode(div);
});
