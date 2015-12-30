//import reactWithMeteorData from './ReactWithMeteorData';
// App component - represents the whole app
//@reactWithMeteorData // Why doesn't this decorator get recognised?
class App extends React.Component {

  //constructor(props) {
  //  super(props);
  //}
  // this function gets hooked up with the decorator
  getMeteorData() {
    return {
      tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
    }
  }

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var domNode = ReactDOM.findDOMNode(this.refs.textInput);
    var text = domNode.value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    domNode.value = "";
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
            <form className="new-task" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new tasks" />
            </form>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// I have to do this manually as well as expose a global
// instead of exporting!
this.App = reactWithMeteorData(autoBind(App));
