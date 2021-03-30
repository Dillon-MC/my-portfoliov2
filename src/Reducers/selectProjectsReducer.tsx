import { Projects } from '../components/ProjectCarousel/Projects';
import ProjectItem from '../components/ProjectItem/ProjectItem';

interface ProjectListProps {
    project1?: JSX.Element,
    project2?: JSX.Element,
    project3?: JSX.Element
}

interface stateProps {
    projects: ProjectListProps
}

interface actionProps {
    type: string,
    payload: number
}

export function selectProjectsReducer(state: stateProps = {projects:{}}, action: actionProps): stateProps {
    switch(action.type) {
        case "PAGE_INDEX_CHANGE1":
            return {
                projects: {
                    project1: <ProjectItem icon={Projects[action.payload].icon} name={Projects[action.payload].name} 
                                description={Projects[action.payload].description} liveLink={Projects[action.payload].liveLink} 
                                repoLink={Projects[action.payload].repoLink} key={Projects[action.payload].name} />
                }
            }
            case "PAGE_INDEX_CHANGE2":
            return {
                projects: {
                    project1: <ProjectItem icon={Projects[action.payload].icon} name={Projects[action.payload].name} 
                                description={Projects[action.payload].description} liveLink={Projects[action.payload].liveLink} 
                                repoLink={Projects[action.payload].repoLink} key={Projects[action.payload].name} />,

                    project2: <ProjectItem icon={Projects[action.payload+1].icon} name={Projects[action.payload+1].name} 
                                description={Projects[action.payload+1].description} liveLink={Projects[action.payload+1].liveLink} 
                                repoLink={Projects[action.payload+1].repoLink} key={Projects[action.payload+1].name} />
                }
            }
            case "PAGE_INDEX_CHANGE3":
            return {
                projects: {
                    project1: <ProjectItem icon={Projects[action.payload].icon} name={Projects[action.payload].name} 
                                description={Projects[action.payload].description} liveLink={Projects[action.payload].liveLink} 
                                repoLink={Projects[action.payload].repoLink} key={Projects[action.payload].name} />,

                    project2: <ProjectItem icon={Projects[action.payload+1].icon} name={Projects[action.payload+1].name} 
                                description={Projects[action.payload+1].description} liveLink={Projects[action.payload+1].liveLink} 
                                repoLink={Projects[action.payload+1].repoLink} key={Projects[action.payload+1].name} />,

                    project3:<ProjectItem icon={Projects[action.payload+2].icon} name={Projects[action.payload+2].name} 
                                description={Projects[action.payload+2].description} liveLink={Projects[action.payload+2].liveLink} 
                                repoLink={Projects[action.payload+2].repoLink} key={Projects[action.payload+2].name} />
                }
            }
        default:
            return state;
    }
}