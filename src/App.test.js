import App from './App';
import {render} from '@testing-library/react';

test('ToDo', () => {  
  const {getByText,getByLabelText} = render(<App/>);

  getByText('TO DO');
  getByLabelText('Add Todo:');
  getByText('Add #1');  
});

