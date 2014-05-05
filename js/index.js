/** @jsx React.DOM */
var React = require('react/addons'),
    Graph = require('./ui-components/graph');

React.renderComponent(
    <Graph />,
    document.getElementsByClassName('container')[0]
);
