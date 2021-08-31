import Input from "./../../common/Input";
import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Metadata from "./../../common/Metadata";

const Login = () => <>
    <h2>Login</h2>
    {/* <Form> */}
    <Input
        type="text"
        name="username"
        id="username"
        title="Username"
        required="required"
    />
    <Input
        type="password"
        name="password"
        id="password"
        title="Password"
    />
    {/* <Button text="Login" /> */}
    {/* </Form> */}
</>;


export default Login;

