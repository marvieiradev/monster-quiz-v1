const Button = (props) => {
    return (
        <div onClick={props.click} className="btn text-white bg-blue-500 m-4 px-12 py-2 text-md hover:bg-red-700 cursor-pointer">{props.text}</div>
    );
}

export default Button;