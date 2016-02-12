
var Item = React.createClass({
    render: function() {
        return (<li>{this.props.content}</li>);
    }
});

var Control = React.createClass({
    render: function() {
        var awesomeFontClass = this.props.asc ? "fa fa-caret-down" : "fa fa-caret-up";
        return (<button onClick={this.props.reorderCallback}><i className={awesomeFontClass}></i></button>);
    }
});

var List = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data,
            asc: this.props.asc
        };
    },
    reorderCallback: function() {
        this.setState({
            data: this.state.data,
            asc: !this.state.asc
        });
    },
    render: function() {
        var sortedList = _.orderBy(this.state.data, null, this.state.asc ? 'asc' : 'desc');
        return (
            <div>
                <Control asc={this.state.asc} reorderCallback={this.reorderCallback}/>
                <ul>{_.map(sortedList, function(str, id){ return <Item key={id} content={str}/>; })}</ul>
            </div>
        );
    }
});

var data = ["Thorin", "Dwalin", "Balin", "Gloin", "Kili", "Fili", "Dori", "Nori", "Ori", "Oin", "Bifur", "Bombur", "Bofur"];
ReactDOM.render(
    <List data={data} asc={true}/>,
    document.getElementById('ex5')
);
