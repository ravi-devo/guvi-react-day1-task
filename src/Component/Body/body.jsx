import Header from "../Header/header";
import MainContent from "../Main/mainContent";
import Footer from "../Footer/footer";
import "./body.css";

const container = (props) => {
    return (
        <div className="body-elements">
            {props.data.map((e, index) => (
                <div className="container-class">
                    <Header subscription = {e.subscription} value = {e.value} key={index} />
                    <MainContent benefits = {e.benefits} unCovered = {e.unCovered} key={index} />
                    <Footer />
                </div>
            ))}
        </div>
    );
}

export default container;
// benifits = {e.benifits} unCovered = {e.unCovered} key={index}