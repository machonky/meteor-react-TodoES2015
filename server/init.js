Meteor.startup(function () {
  if (Tasks.find().count() === 0)
  {
    Tasks.insert({ _id: "1", text: 'task1'});
    Tasks.insert({ _id: "2", text: 'task2'});
    Tasks.insert({ _id: "3", text: 'task3'});
  }
});
