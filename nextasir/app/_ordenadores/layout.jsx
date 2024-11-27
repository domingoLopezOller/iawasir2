export default function ModalLayout({ children }) { 
    return ( <div className="modal-overlay"> <div className="modal-content"> {children} </div> </div> ); }
    