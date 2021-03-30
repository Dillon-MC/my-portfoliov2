import usePortal from "./usePortal";
import ReactDOM from 'react-dom';
import { useEffect } from "react";

const Modal = ({ children }) => {
    const target = usePortal('modal-root');
    return ReactDOM.createPortal(children, target);
}

export default Modal;