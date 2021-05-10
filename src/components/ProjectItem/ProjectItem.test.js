import ProjectItem from './ProjectItem';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, mount, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("Tests the ProjectItem component", () => {
    it('should render ProjectItem component', () => {
        expect(render(<ProjectItem />)).toHaveLength(1);
    });
    it('expect ProjectItem component to match snapshot', () => {
        expect(shallow(<ProjectItem />)).toMatchSnapshot();
    });

    const mockProjectItemProps = {
        name: 'Pokefinder',
        icon: '../../images/pokefinder.jpg',
        description: 'Pokefinder app',
        liveLink: 'link',
        repoLink: 'repo link'
    }
    describe('Renders ProjectItem and tests displaying data from props', () => {
        const wrapper = render(<ProjectItem {...mockProjectItemProps}/>);

        it('expect ProjectItem to display name from props', () => {
            const projectNameLabel = wrapper.find('[id="projectName"]');
            expect(projectNameLabel.text()).toEqual(mockProjectItemProps.name);
        });
        
        it('expect ProjectItem to display icon from props,', () => {
            const projectIcon = wrapper.find('[id="projectIcon"]');
            expect(projectIcon.prop("src")).toEqual(mockProjectItemProps.icon);
        });

        it('expect ProjectItem expand and display description when clicked', () => {
            const wrapper = mount(<ProjectItem {...mockProjectItemProps}/>);
            wrapper.find(`[id="${mockProjectItemProps.name}"]`).simulate('click');
            const projectDescription = wrapper.find('div.description');
            expect(projectDescription.text()).toEqual(mockProjectItemProps.description);
        });

        it('expect Project try out button href to have liveLink from props', () => {
            const projectLiveLink = wrapper.find('[id="liveLinkButton"]');
            expect(projectLiveLink.prop("href")).toEqual(mockProjectItemProps.liveLink);
        });

        it('expect Project repository button href to have repoLink from props', () => {
            const projectRepoLink = wrapper.find('[id="repoLinkButton"]');
            expect(projectRepoLink.prop("href")).toEqual(mockProjectItemProps.repoLink);
        });
    });
});