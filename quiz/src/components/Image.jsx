const Image = (props) => {
    return (
        <img src={props.src} alt="image" className="max-w-[100vh] w-[100%]" />
    );
}

export default Image;