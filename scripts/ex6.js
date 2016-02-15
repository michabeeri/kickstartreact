define(['react', 'react-dom', 'lodash', 'datejs'], function(React, ReactDOM, _, datejs) {
    var Clock = React.createClass({
        getInitialState: function () {
            return {
                time: new Date()
            }
        },
        clockStep: function () {
            this.setState({
                time: new Date()
            });
        },
        render: function () {
            window.requestAnimationFrame(this.clockStep);
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
})
