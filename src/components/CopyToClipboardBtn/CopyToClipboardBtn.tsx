import { useState } from "react";
import './CopyToClipboardBtn.css';

const copyContentToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
}

const CopyToClipboardBtn = ({textToCopy, buttonText}: {textToCopy: string, buttonText: string}): JSX.Element => {
    const [tooltip, setTooltip] = useState<JSX.Element | null>(null);
    
    const displayTooltip = () => {
        setTooltip(<div id="tooltip">Copied!</div>);
        setTimeout(() => {
            setTooltip(null);
        }, 500);
    }

    return (
        <div id="copybutton">
            {tooltip}
            <button className="contactButton" onClick={() => {
                copyContentToClipboard(textToCopy)
                displayTooltip();
            }}>{buttonText}</button>
        </div>
    );
}

export default CopyToClipboardBtn;