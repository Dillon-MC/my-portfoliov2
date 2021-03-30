import ProjectItem from '../ProjectItem/ProjectItem';
import { useEffect, useReducer, useState } from 'react';
import { Projects } from './Projects';
import { selectProjectsReducer } from '../../Reducers/selectProjectsReducer';
import './ProjectCarousel.css';

interface ProjectListProps {
    project1?: JSX.Element,
    project2?: JSX.Element,
    project3?: JSX.Element
}

const ProjectList = (): JSX.Element => {

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedProjects, dispatch] = useReducer(selectProjectsReducer, {projects: {}});
    const [gridSize, setGridSize] = useState<number>(1);

    const [projectGrid, setProjectGrid] = useState<ProjectListProps>({});

    const adjustProjectGrid = (): void => {
        if (visualViewport.width < 1140) {
            setGridSize(1);
        } else if (visualViewport.width < 1580 && visualViewport.width > 1140) {
            //Reset the curret page, otherwise when the grid size increases, 
            //the project components 2 and/or 3 will have an index that is larger than the Projects array length
            setCurrentPage(0);
            setGridSize(2);
        } else {
            setCurrentPage(0);
            setGridSize(3);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => setTimeout(adjustProjectGrid, 500));

        adjustProjectGrid();
    },[]);

    //Dispatch the currentPage it updates
    useEffect(() => {
        dispatch({
            type: gridSize === 3 ? "PAGE_INDEX_CHANGE3" : gridSize === 2 ? "PAGE_INDEX_CHANGE2" :  "PAGE_INDEX_CHANGE1",
            payload: currentPage
        });
    },[currentPage,gridSize])

    //Wait for the next project to be loaded before displaying it
    useEffect(() => {
        if (gridSize === 2) {
            setProjectGrid({
                project1: selectedProjects.projects.project1,
                project2: selectedProjects.projects.project2
            });
        } else if (gridSize === 1) {
            setProjectGrid({
                project1: selectedProjects.projects.project1
            });
        } else {
            setProjectGrid({
                project1: selectedProjects.projects.project1,
                project2: selectedProjects.projects.project2,
                project3: selectedProjects.projects.project3
            });
        }
    },[selectedProjects])

    const changePage = (incrementation: number): void => {
        if(currentPage+incrementation < Projects.length-(gridSize-1) && currentPage+incrementation >= 0) {
            setCurrentPage(currentPage+incrementation);
        }
    }

    return (
        <div id="projectList">
            <div className="half-circle-left" onClick={() => changePage(-1)}><h1 className="arrow" style={currentPage <= 0 ? {color: 'gray'} : {color: 'white'}}>{"<"}</h1></div>
            <div className="half-circle-right" onClick={() => changePage(1)}><h1 className="arrow" style={currentPage >= Projects.length-3 ? {color: 'gray'} : {color: 'white'}}>{">"}</h1></div>
            <div id="list">
                {projectGrid.project1}
                {projectGrid?.project2}
                {projectGrid?.project3}
            </div>
        </div>
    );
}

export default ProjectList;