import { render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

it('should render the App', () => {
    expect(render(<App />)).toHaveLength(1);
});

it('expect App to match snapshot', () => {
    expect(render(<App />)).toMatchSnapshot();
});