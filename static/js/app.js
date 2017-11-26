
    /** @jsx React.DOM */
    var Booklist = React.createClass({
        
        render: function(){
            return (
                <div className="update-label">
                   <Bookinfo title="harry potter" author="rowling" />
                    <Bookinfo title="harry potter" author="rowling" />
                </div>
        )
    }
});

var Bookinfo = React.createClass({
    render: function(){
        return (<div><h1>{this.props.title}</h1>
      <p>{this.props.author}</p></div>
        )
    }
});

React.render(<Booklist/>, document.getElementById('mount-point'));


