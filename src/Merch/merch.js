import React, {useState, useEffect} from "react";
import injectSheet from "react-jss";

const styles = {
    Body: {
        backgroundColor: "#b6ffbd",
        boxSizing: "border-box",
        paddingTop: "150px",
        fontFamily: 'Gothic A1',
    }
}

const Merch = ({classes}) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="Body">
            <div className="main">
                <center>
                    <h2>Coming Soon...</h2>
                </center>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Merch);