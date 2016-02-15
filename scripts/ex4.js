define(['react', 'react-dom', 'lodash'], function(React, ReactDOM, _) {
    function Item(props) {
        return <li>{props.content}</li>;
    }

    function List(props) {
        return <ul>{_.map(props.data, (str, i) => <Item key={i} content={str}/> )}</ul>;
    }

    ReactDOM.render(<List data={["Hello", "There", "World"]}/>, document.getElementById('ex4'));
})
