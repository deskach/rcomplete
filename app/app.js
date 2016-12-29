/**
 * Created by deskach on 29/12/16.
 */
var Header = React.createClass({
  getDefaultProps: function () {
    return {
      name: "React",
      message: 'This is from the component.',
    }
  },

  render: function () {
    const style = {
      border: '1px solid green',
      marginBottom: 10
    };

    return (
        <div style={style}>
          <h1>Hello {this.props.name}!</h1>
          <p>{this.props.message}</p>
        </div>
    );
  }
});

var NameInput = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    const name = this.refs.name.value;
    const message = this.refs.message.value;

    if (name) {
      this.refs.name.value = "";
      this.props.onNewName(name, message);
    }
  },

  render: function () {
    const style = {
      border: '1px solid blue',
      padding: 5,
    };

    return (
        <div style={style}>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name"/>
            <br/>
            <textarea ref="message"/>
            <br/>
            <button>Submit</button>
          </form>
        </div>
    );
  }
});

var Greeter = React.createClass({
  getInitialState: function () {
    return { name: 'React', message: "Some text" };
  },

  onNewName: function (name, message) {
    if (name) {
      this.setState({ name, message });
    }
  },

  render: function () {
    return (
        <div>
          <Header name={this.state.name} message={this.state.message}/>
          <NameInput onNewName={this.onNewName}/>
        </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('app'));

