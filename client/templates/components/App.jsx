//import reactWithMeteorData from './ReactWithMeteorData';
// App component - represents the whole app
//@reactWithMeteorData // Why doesn't this decorator get recognised?
class App extends React.Component {

  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  }

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// I have to do this manually as well as expose a global
// instead of exporting
this.App = reactWithMeteorData(App);
