import {
  Select
} from "./partials/select";
import './partials/styles.scss';

const select = new Select('.select', {
  placeholder: 'Sort',
  // selectedValue: '1',
  data: [{
      value: '1',
      text: 'Number 1'
    },
    {
      value: '2',
      text: 'Number 2'
    },
    {
      value: '3',
      text: 'Number 3'
    },
    {
      value: '4',
      text: 'Number 4'
    },
  ],
  onSelect(item) {
    console.log('Selected item: ', item);
  }
});