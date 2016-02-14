var ListControl = React.createClass({
    addClickHandle(){
        this.input && this.props.addItemHandle(this.input.value);
    },
    render() {
        return (
            <div>
                <span>Task:</span>
                <input ref={ref => this.input = ref}/>
                <button onClick={this.addClickHandle}>Add</button>
            </div>
        );
    }
});

var List = React.createClass({
    render() {
        var items = _(this.props.items).orderBy('id', 'desc').map(itm =>
            <li key={itm.id}
                onClick={this.props.itemCheckHandle.bind(null, itm)}
                style={{
                    cursor: 'pointer',
                    textDecoration: itm.isActive ? 'none' : 'line-through'
                }}
            >{itm.data}</li>).value();

        return <ul>{items}</ul>;
    }
});


var TodoApp = React.createClass({
    getInitialState() {
        return {
            items: [
                {
                    id: 2,
                    data: "Collect underpants",
                    isActive: true
                },
                {
                    id: 1,
                    data: "?",
                    isActive: true
                },
                {
                    id: 0,
                    data: "Profit",
                    isActive: true
                }
            ]
        };
    },
    itemCheckHandle(item) {
        item.isActive = !item.isActive;
        this.forceUpdate();
    },
    addItemHandle(data) {
        this.state.items.push({
            id: this.state.items.length,
            data: data,
            isActive: true});

        this.forceUpdate();
    },
    render() {
        return (
            <div>
                <ListControl addItemHandle={this.addItemHandle}/>
                <List items={this.state.items} itemCheckHandle={this.itemCheckHandle}/>
            </div>
        );
    }
});

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('ex9')
);

