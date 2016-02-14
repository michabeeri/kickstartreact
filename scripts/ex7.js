var Clock = React.createClass({
    render: function() {
        return (
            <div>
                Time is: {this.props.time.toString("hh:mm:ss tt")}
            </div>
        );
    }
});

var ClockOperator = React.createClass({
    getInitialState: function() {
        return {
            time: new Date()
        }
    },
    clockStep: function(){
        this.setState({
            time: new Date()
        });
    },
    render: function() {
        window.requestAnimationFrame(this.clockStep);
        return (
            <Clock time={this.state.time}/>
        );
    }
});

ReactDOM.render(
    <ClockOperator/>,
    document.getElementById('ex7')
);
