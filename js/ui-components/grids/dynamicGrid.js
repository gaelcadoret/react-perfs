/** @jsx React.DOM */
var React = require('react/addons');

var Cells = React.createClass({

    getKey: function(idx) {
        return 'cell_' + this.props.idx + '_' + idx;
    },

    render: function() {

        var classes = React.addons.classSet({
            cell: true,
            active: this.props.isBenchMarkStart
        });

        var cells = this.props.gridData.map(function(currentIndex) {
            return <div key={this.getKey(currentIndex)} data-idx={this.getKey(currentIndex)} className={classes}></div>
        }.bind(this));

        return (
            <div>{cells}</div>
        )
    }

});

var dynamicGrid = React.createClass({

    getInitialState: function() {
        return {
            gridData: this.initGridSize()
        }
    },

    getKey: function(idx) {
        return 'row_' + idx;
    },

    initGridSize: function() {
        var data = [];
        var length = Math.sqrt(this.props.gridSize); // user defined length
        for(var i = 0; i < length; i++) {
            data.push(i);
        }
        return data;
    },

    render: function() {
        var data = [];
        var length = Math.sqrt(this.props.gridSize); // user defined length
        for(var i = 0; i < length; i++) {
            data.push(i);
        }

        var rows = data.map(function(currentIndex) {
            return <div key={this.getKey(currentIndex)} className='row'>
                        <Cells idx={currentIndex} gridData={data} isBenchMarkStart={this.props.isBenchMarkStart} />
                    </div>
        }.bind(this));

        return(
            <div className='grid512'>
                {rows}
            </div>
        );
    }

});

module.exports = dynamicGrid;