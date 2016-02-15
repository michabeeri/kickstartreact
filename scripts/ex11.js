define(['react', 'react-dom', 'react-addons-linked-state-mixin', 'lodash'], function(React, ReactDOM, LinkedStateMixin, _) {
    var NumericInput = React.createClass({
        render() {
            return (
                <input type="number" value={this.props.number} readOnly/>
            );
        }
    });

    var Output = React.createClass({
        render() {
            return (
                <input type="number" value={this.props.number} readOnly/>
            );
        }
    });

    var App = React.createClass({
        getInitialState() {
            return {
                number: 4
            };
        },
        render() {
            return (
                <div>
                    <NumericInput number={this.state.number}/>
                    <Output number={2 * this.state.number}/>
                </div>
            );
        }
    });

    ReactDOM.render(
        <App/>,
        document.getElementById('ex11')
    );
})
