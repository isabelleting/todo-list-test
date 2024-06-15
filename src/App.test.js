import App from './App';
import {render} from '@testing-library/react';

test('ToDo', () => {  
  const {getByText,getByLabelText} = render(<App/>);

  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');  
});

