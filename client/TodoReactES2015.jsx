Meteor.startup(function () {

  // Use Meteor.startup to render the component after the page is ready
  //React.render(<App />, document.getElementById("render-target"));
  ReactDOM.render(<App />, document.getElementById("render-target"));
});
