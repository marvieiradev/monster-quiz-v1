import Button from "./Button";
const Modal = (props) => {
    return (
        <div className="bg-[#0000008c] flex w-full h-full z-1 m-auto fixed top-0 bottom-0" onClick={props.click}>
            <div className="container bg-yellow-50 flex justify-center m-auto w-[500px] rounded-md border-4 relative">
                <span className="h-deco-line absolute top-0 block max-w-full"></span>
                <span className="h-deco-line absolute bottom-0 rotate-180 block max-w-full"></span>
                <div className="flex flex-col items-center mt-10 mb-10">
                    <h1 className="title text-2xl mb-1">{props.mesage}</h1>
                    <div className="w-[80%] flex items-center justify-center mt-[-8%] mb-[-4%] pointer-events-none">
                        <img src={props.image} alt="image" />
                    </div>
                    <p className="text-2xl mb-2">{props.name}</p>
                    <Button text="Próximo" />
                </div>
            </div>

        </div>
    );
}

export default Modal;