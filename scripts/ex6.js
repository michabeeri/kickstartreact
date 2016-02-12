
var Clock = React.createClass({
    getInitialState: function() {
        var self = this;
        function clockLoop(){
            self.setState({
                time: new Date()
            });
            window.requestAnimationFrame(clockLoop);
        };
        window.requestAnimationFrame(clockLoop);
        
        return {
            time: new Date()
        }
    },
    render: function() {
        return (
            <div>
                Time is: {this.state.time.toString("hh:mm:ss tt")}
            </div>
        );
    }
});

ReactDOM.render(
    <Clock/>,
    document.getElementById('ex6')
);
