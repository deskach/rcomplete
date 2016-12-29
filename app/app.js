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
    let updates = {};

    if (name) {
      this.refs.name.value = "";
      updates.name = name;
    }
    if (message) {
      this.refs.message.value = "";
      updates.message = message;
    }

    this.props.onNewData(updates);
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

  onNewData: function (updates) {
    this.setState(updates);
  },

  render: function () {
    return (
        <div>
          <Header name={this.state.name} message={this.state.message}/>
          <NameInput onNewData={this.onNewData}/>
        </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('app'));

