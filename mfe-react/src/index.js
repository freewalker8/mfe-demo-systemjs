import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './App';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => {
        debugger
        return document.getElementById('single-spa-application:mfe_react')
    }
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

// export const mount = [
//     reactLifecycles.mount,
// ];
export function mount(props) {
    console.log('mfe-react mount,token', props.authToken); // do something with the common authToken
    return reactLifecycles.mount(props);
  }
export const unmount = [
    reactLifecycles.unmount,
];