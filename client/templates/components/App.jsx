//import reactWithMeteorData from './ReactWithMeteorData';

// App component - represents the whole app
//@reactWithMeteorData // Why doesn't this decorator get recognised?
class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      hideCompleted: false
    };
  }
  // this function gets hooked up with the decorator
  getMeteorData() {
    let query = {}

    if (this.state.hideCompleted) {
      query = {checked: {$ne:true}};
    }
    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
      currentUser: Meteor.user()
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

    Meteor.call("addTask", text);

    // Clear form
    domNode.value = "";
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.data.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly={true}
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted} />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />
          { this.data.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new tasks" />
            </form> : ''
          }
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
//reactMixin(App.prototype, ReactMeteorData);
