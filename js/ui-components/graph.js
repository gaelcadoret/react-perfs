/** @jsx React.DOM */
var React = require('react/addons'),
    Grid512 = require('./grids/512');

var Graph = React.createClass({

    getInitialState: function() {
        return {
            isBenchMarkStart: false,
            gridSize: 512
        }
    },

    startBenchMark: function () {
        this.setState({
            isBenchMarkStart: true
        });
    },

    getGrid: function () {
        switch(this.state.gridSize) {
            case 512: return <Grid512 isBenchMarkStart={this.state.isBenchMarkStart} />
                break;

            default: return <div>Unknown grid size!</div>
        }
        
    },

    render: function() {
        return(
            <div>
                {this.getGrid()}
                <button onClick={this.startBenchMark}>GO</button>
            </div>
        );
    }

});

module.exports = Graph;