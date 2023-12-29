import React, {useState, useEffect} from "react";
import injectSheet from "react-jss";
import panda from "../assets/panda-01.png";
import tiger from "../assets/tiger-01.png";
import elephant from "../assets/elephant-01.png";
import vector1 from "../assets/Vector 1.svg"
import "./home.css"

const styles = {
    Home: {
        backgroundColor: "#b6ffbd",
        boxSizing: "border-box",
        paddingTop: "150px",
        fontFamily: 'Gothic A1',
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
        '& img': {
            maxWidth: "100%",
            width: "auto",
            "&:hover": {
                maxWidth: "110%",
                margin: "-20px"
            }
        },
    },
    Intro: {
        textAlign: "center",
        padding: "0",
        margin: "0",
    },
    About: {
        textAlign: "center",
        padding: "0",
        margin: "0",
    },
    eng: {
        fontSize: "26px",
        fontFamily: 'Gothic A1',
        fontWeight: '700',
        margin: "0",
    },
    kor: {
        fontSize: "25px",
        fontFamily: 'SeoulHangang',
        fontWeight: '400',
        wordWrap: 'break-word',
        margin: "5px",
    },
    // vector1: {
    //     position: "absolute",
    //     marginTop: "-50px",
    //     marginLeft: "-20px",
    // }
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
            {/* <div className={classes.vector1} style={{width: '100%', height: '100%'}}>
                <img src={vector1}></img>
            </div> */}
            <div className={classes.Intro}>
                <p className={classes.eng}>Hey there👋 We are Yewniik Friends!</p>
                <p className={classes.kor}>안녕하세요. 우리는 유니크 프렌즈 입니다!</p>
            </div>
            <div className={classes.Friends}>
                <div className={classes.friends}>
                    <div id="panda" className={classes.col} ><img src={panda}></img></div>
                    <div className="hide">MING 🇨🇳</div>
                    <div id="tiger" className={classes.col} ><img src={tiger}></img></div>
                    <div className="hide2">HO 🇰🇷</div>
                    <div id="elephant" className={classes.col} ><img src={elephant}></img></div>
                    <div className="hide3">CHER 🇮🇳</div>
                </div>
            </div>
            <div className={classes.About}>
                <p id="about" className={classes.eng}>We are creative. We are different. We are unique.</p>
                <div className="about2">
                    <p id="about2">
                        Discover a world where imagination is turned into reality. 
                        Explore the multiverse through <br></br>the lense of unique animals around the world.
                        Navigate to the "Learn" tab to begin your <br></br>journey, 
                        or the "Merch" tab to get a glimpse of your favorite characters come to real life!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);