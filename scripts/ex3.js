define(['react', 'react-dom', 'lodash'], function(React, ReactDOM, _) {
    var data = ["Hello", "There", "World"];

    ReactDOM.render(
        <ul>{_.map(data, (str, i) => <li key={i}>{str}</li>)}</ul>,
        document.getElementById('ex3')
    );
})
