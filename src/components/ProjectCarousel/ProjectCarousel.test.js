import ProjectCarousel from './ProjectCarousel';
import { Projects } from './Projects';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Tests the ProjectCarousel component', () => {
    jest.useRealTimers();

    const wrapper = render(<ProjectCarousel />);
    let container;
    beforeEach(() => {            
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    test('should render ProjectCarousel component', () => {
        expect(wrapper).toHaveLength(1);
    });

    test('expect ProjectCarousel to display next project when arrow buttons are clicked', async () => {
        act(() => {
            ReactDOM.render(<ProjectCarousel projectGridSize={1}/>, container);
        });
        const pageUpBtn = container.querySelector('#pageUpBtn');
        const pageDownBtn = container.querySelector('#pageDownBtn');

        let project1 = container.querySelector(`#${Projects[0].name}`);
        expect(project1).toBeTruthy();
        act(() => {
            pageUpBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        // page change is asynchronous so we need to wait before checking if the page changed
        await new Promise(res => setTimeout(res, 500));
        let project2 = container.querySelector(`#${Projects[1].name}`);
        project1 = container.querySelector(`#${Projects[0].name}`);

        //should display next project when page is changed
        expect(project2).toBeTruthy();
        expect(project1).toBeNull();

        //should display previous project again when page down button is clicked
        act(() => {
            pageDownBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        await new Promise(res => setTimeout(res, 400));
        project1 = container.querySelector(`#${Projects[0].name}`);
        project2 = container.querySelector(`#${Projects[1].name}`);
        expect(project1).toBeTruthy();
        expect(project2).toBeNull();
    });

    describe('Tests the ProjectCarousel grid resizing', () => {
        test('expect ProjectCarousel to display 3 projects when gridsize is 3', () => {
            act(() => {
                ReactDOM.render(<ProjectCarousel projectGridSize={3}/>, container);
            });
            //expect first project element to render with correct project
            expect(container.querySelector('#'+Projects[0].name)).toBeTruthy();
            //expect second project element to render with correct project
            expect(container.querySelector('#'+Projects[1].name)).toBeTruthy();
            //expect third project element to render with correct project
            expect(container.querySelector('#'+Projects[2].name)).toBeTruthy();
        });
    
        test('expect ProjectCarousel to display 2 projects when gridsize is 2', () => {
            act(() => {
                ReactDOM.render(<ProjectCarousel projectGridSize={2}/>, container);
            });
            //expect first project element to render with correct project
            expect(container.querySelector('#'+Projects[0].name)).toBeTruthy();
            //expect second project element to render with correct project
            expect(container.querySelector('#'+Projects[1].name)).toBeTruthy();
            //expect thrid project element to NOT render
            expect(container.querySelector('#'+Projects[2].name)).toBeNull();
        });

        test('expect ProjectCarousel to display 1 projects when gridsize is 1', () => {
            act(() => {
                ReactDOM.render(<ProjectCarousel projectGridSize={1}/>, container);
            });
            //expect first project element to render with correct project
            expect(container.querySelector('#'+Projects[0].name)).toBeTruthy();
            //expect second project element to NOT render
            expect(container.querySelector('#'+Projects[1].name)).toBeNull();
            //expect thrid project element to NOT render
            expect(container.querySelector('#'+Projects[2].name)).toBeNull();
        });
    });
});