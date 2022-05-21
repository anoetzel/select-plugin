# About the plugin

Create a customized select by class `new Select` with a selector name and options.

In the options you can assign the placeholder or default `selectedValue` and you should define `data` (array with objects):
```
data: [{
      value: '',
      text: ''
    }]
```
The selected values you can treat in the function `onSelect(item) => {}`