const Button = (props) => {
    return (
        <button className="btn text-white bg-blue-500 m-4 px-12 py-2 text-md hover:bg-red-700">{props.text}</button>
    );
}

export default Button;