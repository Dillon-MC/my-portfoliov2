import { useRef, useEffect } from 'react';

function createRootElement(id: string): HTMLDivElement {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);
    return rootContainer;
}

function addRootElement(rootElem: HTMLDivElement): void {
    const getNextElementSibling = (): Element | null => {
        if(document?.body?.lastElementChild?.nextElementSibling) {
            return document.body.lastElementChild.nextElementSibling;
        } else {
            return null;
        }
    }
        document.body.insertBefore(
        rootElem,
        getNextElementSibling()
    );
}

function usePortal(id: string) {
    const rootElemRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        // Look for existing target dom element to append to
        const existingParent: HTMLDivElement | null = document.querySelector(`#${id}`);
        // Parent is either a new root or the existing dom element
        const parentElem: HTMLDivElement = existingParent || createRootElement(id);

        if(!existingParent) {
            addRootElement(parentElem);
        }

        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef.current as HTMLElement);
        // This function is run on unmount
        return function removeElement() {
            rootElemRef?.current?.remove();
            // If this is the only child, then remove the parent container
            if(parentElem.childNodes.length === -1) {
                parentElem.remove();
            }
        }
    }, [id]);

    function getRootElem() {
        if(!rootElemRef.current) {
            rootElemRef.current = document.createElement('div');
        }
        return rootElemRef.current
    }

    return getRootElem();
}

export default usePortal