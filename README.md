# TodoES2015

This is an implementation of the standard react TODO application found at: https://www.meteor.com/tutorials/react/creating-an-app

We'll use the newer ES2015 class notation and figure out how to get Meteor Data Reactivity to work without using Mixins - [unavailable to ES2015 classes](https://facebook.github.io/react/docs/reusable-components.html#no-mixins).

We'll also investigate how to perform an auto-binding operation since this is [not implemented in ES2015 class notation](https://facebook.github.io/react/docs/reusable-components.html#no-autobinding), nor is "fat arrow" notation (as at Meteor 1.2)

Meteor also introduces some quirks with respect to dependencies. We'll take advantage of Meteor's folder loading ordering maintain manual control over dependencies. 
