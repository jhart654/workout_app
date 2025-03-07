
import ContactForm from './ContactForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div
            id="modal"
            onClick={ props.onClose }
            className="fixed w-full h-full flex overflow-auto z-1
            justify-center align-middle "
            >
                <div
                    className="max-w-600px w-2/5 flex z-1 mt-20 bg-gray-400 shadow-xl rounded "
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    >
                        <div className="w-full flex flex-col">
                            <div className="flex flex-row space-apart">
                                <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                                onClick={props.onClose}>
                                    X
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center mt-3 p-2" >
                                <ContactForm id={props.id} onClose={props.onClose} />
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Modal