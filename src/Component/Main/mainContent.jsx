import "./mainContent.css";

const mainContent = (props) => {
    return (
        <div className="mainContent-class">
            <ul className="list benefits-list">
               {props.benefits.map((e) => (
                <li>{e}</li>
               ))}
            </ul>
            <ul className="list unCovered-list">
                {props.unCovered.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>
        </div>
    );
}

export default mainContent;