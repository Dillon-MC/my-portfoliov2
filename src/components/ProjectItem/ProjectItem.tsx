import './ProjectItem.css';
import { useState } from 'react';

interface ProjectItemProps {
    name: string,
    icon: string,
    description: string,
    liveLink: string,
    repoLink: string
}

const ProjectItem = ({ name, icon, description, liveLink, repoLink }: ProjectItemProps): JSX.Element => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const expandProjectElement = (): void => {
        setExpanded(true);
    }

    const shrinkProjectElement = (): void => {
        setExpanded(false);
    }

    //Stops parent element click event from being called when a child element is clicked.
    const endBubbling = (event: any) => {
        event.stopPropagation();
    } 

    return (
        <div id={name} className={expanded ? "projectItemExpanded" : "projectItem"} onClick={expandProjectElement}>
            <h3 id="projectName">{name}</h3>
            <img id="projectIcon" src={icon} alt="icon"/>
            <div className="buttonContainer" onClick={endBubbling}>
                {expanded ? <button className="exitButton" onClick={shrinkProjectElement}>&times;</button> : null}
                <a id="liveLinkButton" href={liveLink} target="blank"><button className="projectButton" onClick={endBubbling}>Try it out!</button></a>
                <a id="repoLinkButton" href={repoLink} target="blank"><button className="projectButton" onClick={endBubbling}>Repo</button></a>
            </div>
            <div className="description">{expanded ? <span>{description}</span> : null}</div>
        </div>
    );
}

export default ProjectItem;