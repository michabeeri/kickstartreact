var data = ["Hello", "There", "World"];

function createListItem(str, id){
    return React.DOM.li({key: id}, str);
}

ReactDOM.render(
    <ul>{_.map(data, createListItem)}</ul>,
    document.getElementById('ex3')
);
