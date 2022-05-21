# About the plugin

![](https://github.com/anoetzel/select-plugin/raw/main/example.bmp)

In html create an element for select, for instance `<div class="select"></div>`

Create a customized select by class `new Select` with a selector name and options.

In the options you can assign the placeholder or default `selectedValue` and you should define `data` (array with objects):
```
data: [{
      value: '',
      text: ''
    }]
```
The selected values you can treat in the function `onSelect(item) => {}`
