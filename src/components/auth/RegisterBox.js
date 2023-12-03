import Login from "./Login";
import Signup from "./Signup";
import GlobalPostList from "../common/post/GlobalPostList";

// Same as Postbox, but for Login/Signup
const RegisterBox = (props) => {
    return(
        <div className="container">
            <div className="left-section">
                <h2>Recent Posts</h2>
                <GlobalPostList posts={props.posts}/>
            </div>
            <div className="right-section">
                {(props.loggingIn) ?
                (<Login />)
                : (<Signup />)
                }
            </div>
        </div>
    );
}

export default RegisterBox;