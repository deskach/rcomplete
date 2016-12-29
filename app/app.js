/**
 * Created by deskach on 29/12/16.
 */
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      message: 'This is from the component.',
    }
  },

  getInitialState: function () {
    return {
      name: 'React'
    }
  },

  onFormSubmit: function (e) {
    e.preventDefault();

    const name = this.refs.name.value;

    if(name) {
      this.refs.name.value = "";
      this.setState({name});
    }
  },

  render: function () {
    return (
        <div>
          <h1>Hello {this.state.name}!</h1>
          <p>{this.props.message}</p>

          <form onSubmit={this.onFormSubmit} >
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
        </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('app'));

