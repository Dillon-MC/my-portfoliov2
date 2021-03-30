import './Header.css';
import CopyToClipboardBtn from '../CopyToClipboardBtn/CopyToClipboardBtn';
const Header = (): JSX.Element => {
    return (
        <div id="header">
            <div id="contacts">
                <h4>Contacts</h4>
            </div>
            <hr/>
            <div id="contactButtonsContainer">
            <a href="https://github.com/Dillon-MC" target="blank"><button id="githubButton">My Github</button></a>
                <a href="https://twitter.com/WebD3vGuy" target="blank"><button className="contactButton">Twitter</button></a>
                <a href="mailto:dillon.4c@gmail.com" target="blank"><button className="contactButton">Email</button></a>
                <CopyToClipboardBtn textToCopy="Dillon#1711" buttonText="Discord"/>
            </div>
        </div>
    );
}

export default Header;