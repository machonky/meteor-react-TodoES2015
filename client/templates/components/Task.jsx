class Task extends React.Component {
  static propTypes() {
    return {
      task: React.PropTypes.object.isRequired
    };
  }

  render() {
    return (<li>{this.props.task.text}</li>);
  }
}

this.Task = Task;
