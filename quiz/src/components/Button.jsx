const Button = (props) => {
    return (
        <>
            < div onClick={props.click} className="btn cursor-pointer justify-center hover:scale-105">
                <span className="text-white text-md text-center md:text-xl">{props.text}</span>
            </div>
        </>

    );
}

export default Button;