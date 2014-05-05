/** @jsx React.DOM */
var React = require('react/addons');

var Cells = React.createClass({

    getKey: function(idx) {
        return 'cell_' + idx;
    },

    render: function() {

        var classes = React.addons.classSet({
            cell: true,
            active: this.props.isBenchMarkStart
        });

        var cells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(function(currentIndex) {
            return <div key={this.getKey(currentIndex)} className={classes}></div>
        }.bind(this));

        return (
            <div>{cells}</div>
        )
    }

});

var Grid512 = React.createClass({

    getKey: function(idx) {
        return 'row_' + idx;
    },

    render: function() {

        var rows = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(function(currentIndex) {
            return <div key={this.getKey(currentIndex)} className='row'>
                        <Cells idx={currentIndex} isBenchMarkStart={this.props.isBenchMarkStart} />
                    </div>
        }.bind(this));

        return(
            <div className='grid512'>
                {rows}
            </div>
        );
    }

});

module.exports = Grid512;