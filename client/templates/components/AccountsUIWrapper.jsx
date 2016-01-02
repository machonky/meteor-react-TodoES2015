class AccountsUIWrapper extends React.Component {

  componentDidMount() {
    this.view =
      Blaze.render(Template.loginButtons,
        ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return <span ref="container" />;
  }
}

this.AccountsUIWrapper = autoBind(AccountsUIWrapper);
