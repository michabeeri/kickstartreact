
var Item = React.createClass({
    render: function() {
        return (<li>{this.props.content}</li>);
    }
});

var List = React.createClass({
    createItem: function(str, id){
        return <Item key={id} content={str}/>;
    },
    render: function() {
        return (<ul>{_.map(this.props.data, this.createItem)}</ul>);
    }
});

var data = ["Hello", "There", "World"];
ReactDOM.render(
    <List data={data}/>,
    document.getElementById('ex4')
);
