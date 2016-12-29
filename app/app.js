/**
 * Created by deskach on 29/12/16.
 */
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component.',
    }
  },

  render: function () {
    return (
        <div>
          <h1>Hello {this.props.name}!</h1>
          <p>{this.props.message}</p>
        </div>
    );
  }
});

ReactDOM.render(<Greeter />, document.getElementById('app'));

