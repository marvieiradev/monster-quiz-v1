const Button = (props) => {
    return (
        <>
            < div onClick={props.click} className="btn cursor-pointer justify-center">
                <span className="text-white text-xl text-center">{props.text}</span>
            </div>
        </>

    );
}

export default Button;