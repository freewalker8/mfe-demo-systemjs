import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './App';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => {
        return document.getElementById('single-spa-application:mfe_react')
    }
});

export const bootstrap = reactLifecycles.bootstrap;

export function mount(props) {
    console.log('mfe-react mount,token', props.authToken); // do something with the common authToken
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    console.log('mfe-react unmount');
    return reactLifecycles.unmount(props);
};
// export const bootstrap = reactLifecycles.bootstrap;
// export const mount = reactLifecycles.mount;
// export const unmount = reactLifecycles.unmount;