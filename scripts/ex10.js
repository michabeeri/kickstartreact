define(['react', 'react-dom', 'lodash'], function(React, ReactDOM, _) {
    var FilterControl = React.createClass({
        render() {
            return (
                <div>
                    <span>Filter:</span>
                    <input onChange={evt => this.props.filterItemsHandle(evt.target.value)}/>
                </div>
            );
        }
    });

    var AddControl = React.createClass({
        addClickHandle(){
            this.refs.input && this.props.addItemHandle(this.refs.input.value);
        },
        render() {
            return (
                <div>
                    <button onClick={this.addClickHandle}>Add</button>
                    <input ref="input"/>
                </div>
            );
        }
    });

    var Item = React.createClass({
        deleteClickHandle(){
            this.props.removeItemHandle(this.props.id);
        },
        render() {
            return (
                <li>
                    <span>{this.props.data}</span>
                    <button onClick={this.deleteClickHandle}>Delete</button>
                </li>
            );
        }
    });

    var List = React.createClass({
        render() {
            var items = _(this.props.items)
                .filter(itm => itm.data.toUpperCase().indexOf(this.props.filterString.toUpperCase()) === 0)
                .map(itm => <Item id={itm.id} key={itm.id} data={itm.data}
                                  removeItemHandle={this.props.removeItemHandle}/>)
                .value();

            return (<ul>{items}</ul>);
        }
    });


    var App = React.createClass({
        getInitialState() {
            return {
                filterString: "",
                items: [
                    {
                        id: _.uniqueId(),
                        data: "Collect underpants",
                    },
                    {
                        id: _.uniqueId(),
                        data: "?",
                    },
                    {
                        id: _.uniqueId(),
                        data: "Profit",
                    }
                ]
            };
        },
        addItemHandle(data) {
            this.setState({
                items: [
                    {
                        id: _.uniqueId(),
                        data: data,
                        isActive: true
                    },
                    ...this.state.items
                ]
            });
        },
        removeItemHandle(id) {
            this.setState({
                items: _.filter(this.state.items, itm => itm.id !== id)
            });
        },
        filterItemsHandle(filterString) {
            this.setState({filterString: filterString});
        },
        render() {
            return (
                <div>
                    <FilterControl filterItemsHandle={this.filterItemsHandle}/>
                    <AddControl addItemHandle={this.addItemHandle}/>
                    <List items={this.state.items} filterString={this.state.filterString}
                          removeItemHandle={this.removeItemHandle}/>
                </div>
            );
        }
    });

    ReactDOM.render(
        <App/>,
        document.getElementById('ex10')
    );
})
