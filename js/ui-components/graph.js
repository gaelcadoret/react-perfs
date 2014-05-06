/** @jsx React.DOM */
var React = require('react/addons'),
    DynamicGrid = require('./grids/dynamicGrid');

var startTime = 0,
    endTime = 0;

var Graph = React.createClass({

    getInitialState: function() {
        return {
            isBenchMarkStart: false,
            gridSize: 256,
            chrono: 0
        }
    },

    componentWillUpdate: function() {
        startTime = new Date();
    },

    componentDidUpdate: function() {
        endTime = new Date();
    },

    startBenchMark: function () {
        this.setState({
            isBenchMarkStart: true,
            chrono: endTime.getTime() - startTime.getTime()
        });
    },

    resetBenchMark: function () {
        this.setState({
            isBenchMarkStart: false
        });
    },

    switchGrid: function (gridSize) {
        this.setState({
            gridSize: gridSize
        });
    },

    getNbElements: function () {
        return this.state.gridSize + ' elements';
    },

    render: function() {
        return(
            <div>
                <DynamicGrid gridSize={this.state.gridSize} isBenchMarkStart={this.state.isBenchMarkStart} />
                <div>
                    {this.state.chrono / 1000} s
                </div>
                <div>
                    {this.getNbElements()}
                </div>
                <div>
                    <button onClick={this.startBenchMark}>GO</button>
                    <button onClick={this.resetBenchMark}>Reset benchmark</button>
                </div>
                <div>
                    <button onClick={this.switchGrid.bind(this, 256)}>Switch to 16x16 Grid</button>
                    <button onClick={this.switchGrid.bind(this, 1024)}>Switch to 32x32 Grid</button>
                    <button onClick={this.switchGrid.bind(this, 4096)}>Switch to 64x64 Grid</button>
                    <button onClick={this.switchGrid.bind(this, 16384)}>Switch to 128x128 Grid</button>
                    <button onClick={this.switchGrid.bind(this, 65536)}>Switch to 256x256 Grid</button>
                </div>
            </div>
        );
    }

});

module.exports = Graph;