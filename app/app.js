/**
 * Created by deskach on 29/12/16.
 */
class Greeter extends React.Component{
  render() {
    return (
        <div>
          <h1>Hello React!</h1>
          <p>This is from the component.</p>
        </div>
    );
  }
}

ReactDOM.render(<Greeter/>, document.getElementById('app'));

