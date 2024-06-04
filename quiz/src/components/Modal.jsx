import Button from "./Button";
const Modal = (props) => {
    return (
        <div className="bg-[#0000008c] flex w-full h-full z-1 m-auto fixed top-0 bottom-0" onClick={props.click}>
            <div className="bg-orange-600 flex flex-col items- m-auto w-[80%]">
                <h2>{props.mesage}</h2>
                <img src={props.image} alt="0" />
                <Button text="proximo" />
            </div>

        </div>
    );
}

export default Modal;