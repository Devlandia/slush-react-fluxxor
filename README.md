# slush-react-fluxxor

Slush generator with ReactJS+Fluxxor

##Getting Started
Install `slush generator`
```
npm install -g slush
```
Install `gulp`
```
npm install -g gulp
```
Make a new directory, and `cd` into it
```
mkdir my-app && cd $_
```
Install `react-fluxxor generator`
```
npm install -g slush-react-fluxxor
```
Generate your app template
```
slush react-fluxxor
```

Run `gulp` to preview on local host.

##Generated Project

###Folder structure
All files for your application should go inside `app/src` in its corresponding subfolder **(actions|components|constants|stores)**.

#####Example:

When adding a new Store you should create a new file on `app/src/stores`. Let's say `app/src/stores/place.jsx`.  
Then you should add it to the stores list in `app/src/stores.jsx`:

    var TodoStore = require('./stores/todo');
    var PlaceStore = require('./stores/place'); // New store

    var stores = {
      TodoStore: new TodoStore(),
      PlaceStore: new PlaceStore() // New store
    };
    
    module.exports = stores;

Then the new created store will be [automatically included](https://github.com/Devlandia/slush-react-fluxxor/blob/master/templates/app/src/app.jsx#L5) to your Flux application. Actions will also be automatically be included this way, using the file `app/src/actions.jsx`.

###React Components

By default, the component `src/components/application.jsx` is included and rendered in the `app.jsx`, then, for convenience, you may use this component as a `root component` for your application.

## Contributing

See the [CONTRIBUTING.md](https://github.com/Devlandia/slush-react-fluxxor/blob/master/CONTRIBUTING.md) for instructions (in progress...)

## License

slush-react-fluxxor is free software, and may be redistributed under the terms specified in the [LICENSE](https://github.com/Devlandia/slush-react-fluxxor/blob/master/LICENSE) file.