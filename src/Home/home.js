import React, {useState, useEffect} from "react";
import injectSheet from "react-jss";
import panda from "../assets/panda-01.png";
import tiger from "../assets/tiger-01.png";
import elephant from "../assets/elephant-01.png";
import "./home.css"

const styles = {
    Home: {
        backgroundColor: "#b6ffbd",
        boxSizing: "border-box",
    },
    Friends: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        margin: "0",
    },
    friends: {
        display: "flex",
        width: "65%",
    },
    col: {
        flex: "1",
        marginTop: "10px",
        marginBottom: "50px",
        margin: "-20px",
        // width: "10%",
        '& img': {
            maxWidth: "100%",
            width: "auto"
        }
    },
    Intro: {
        textAlign: "center",
        padding: "0",
        margin: "0",
    },
    eng: {
        fontSize: "28px",
        fontFamily: 'Gothic A1',
        fontWeight: '700',
        margin: "0",
        paddingTop: "50px"
    },
    kor: {
        fontSize: "26px",
        fontFamily: 'SeoulHangang',
        fontWeight: '400',
        wordWrap: 'break-word',
        margin: "5px",
    }
}

const Home = ({classes}) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={classes.Home}>
            <div className={classes.Intro}>
                <p className={classes.eng}>Hey there👋 We are Yoonique Friends!</p>
                <p className={classes.kor}>안녕하세요. 우리는 유니크 프렌즈 입니다!</p>
            </div>
            <div className={classes.Friends}>
                <div className={classes.friends}>
                    <div className={classes.col} ><img src={panda}></img></div>
                    <div className={classes.col} ><img src={tiger}></img></div>
                    <div className={classes.col} ><img src={elephant}></img></div>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);