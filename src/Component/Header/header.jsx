import "./header.css";

const header = (props) => {

    return (
    <div className="header-class">
        <p className="free">{props.subscription}</p>
        <h1>${props.value}/month</h1>
    </div>
    );
}

export default header;