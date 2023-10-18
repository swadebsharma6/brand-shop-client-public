import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const About = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2>This is About : {user && user}</h2>
        </div>
    );
};

export default About;