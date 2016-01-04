class Task extends React.Component {

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this.props.task._id, ! this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call("removeTask", this.props.task._id);
  }

  render() {
    const taskClassName = this.props.task.checked ? "checked":"";

    return (
      <li className={taskClassName}>
        <button
          className="delete"
          onClick={this.deleteThisTask}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.task.checked}
          onClick={this.toggleChecked} />

        <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
      </li>);
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired
};

// Why do we have to pollute the global namespace, instead of exporting
this.Task = autoBind(Task);
