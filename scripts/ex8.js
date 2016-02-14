var OutputText = React.createClass({
    render: function() {
        return (
            <input type="text" value={this.props.value} readOnly style={{
                fontWeight: (this.props.bold ? 'bold' : 'normal'),
                fontStyle: (this.props.italic ? 'italic' : 'normal')
            }}></input>
        );
    }
});

var InputText = React.createClass({
    inputHandler: function (evt){
        this.props.onChangeCallback(evt.target.value);
    },
    render: function() {
        return (
            <label style={{display: 'block'}}>
                <span>Input:</span>
                <input type="text" onChange={this.inputHandler}></input>
            </label>
        );
    }
});

var Checkbox = React.createClass({
    render: function() {
        return (
            <label style={{display: 'block'}}>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChangeCallback}></input>
                <span>{this.props.description}</span>
            </label>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            value: "",
            bold: false,
            italic: false
        };
    },
    boldCallback: function () {
        this.setState({
            value: this.state.value,
            bold: !this.state.bold,
            italic: this.state.italic
        });
    },
    italicCallback: function () {
        this.setState({
            value: this.state.value,
            bold: this.state.bold,
            italic: !this.state.italic
        });
    },
    textInputCallback: function(title){
        this.setState({
            value: title,
            bold: this.state.bold,
            italic: this.state.italic
        });
    },
    render: function() {
        return (
            <div>
                <InputText onChangeCallback={this.textInputCallback}/>
                <Checkbox checked={this.state.bold} description={"bold"} onChangeCallback={this.boldCallback}/>
                <Checkbox checked={this.state.italic} description={"italic"} onChangeCallback={this.italicCallback}/>
                <OutputText value={this.state.value} bold={this.state.bold} italic={this.state.italic}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('ex8')
);
