import Button from "./Button";
const Modal = (props) => {
    return (
        <div className="bg-[#0000008c] flex w-full h-full z-1 m-auto fixed top-0 bottom-0" onClick={props.click}>
            <div className="bg-orange-600 flex flex-col items-center m-auto w-[500px] rounded-md">
                <h1 className="text-2xl">{props.mesage}</h1>
                <div className="h-[280px] flex items-center justify-center">
                    <img src={props.image} alt="0" width="99%" />
                </div>
                <p>{props.name}</p>
                <Button text="proximo" />
            </div>

        </div>
    );
}

export default Modal;