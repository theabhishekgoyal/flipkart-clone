import { useState, useContext } from "react";
import { authenticationSignup, authenticationLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 28%;
  height: 82%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const accountIntitialValues = {
  login: {
    view: "login",
    heading: "login",
    subHeading: " Get access to your Orders, Wishlist and Recommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're a new user!",
    subHeading: "signup with your mobile number to get started",
  },
};

const signupIntitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginIntitialValues = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountIntitialValues.login);
  const [signup, setSignup] = useState(signupIntitialvalues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginIntitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const signupUser = async () => {
    let response = await authenticationSignup(signup);
    // console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
    // alert("Registration Successful!");
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response = await authenticationLogin(login);
    if (!response) setError(true);
    else {
      setError(false);
      handleClose();
      setAccount(response.data.data.firstname);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>

            {account.view === "login" ? (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  label="Enter username number"
                />
                {error && (
                  <Error>Please enter valid username or password</Error>
                )}
                <TextField
                  variant="standard"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  label="Enter Password"
                />
                <Text>
                  By continuing, you agree to Flipkart's Terms of use and
                  Privacy Policy.
                </Text>

                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount
                  onClick={() => {
                    toggleSignup();
                  }}
                >
                  New to Flipkart? Create an account
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="firstname"
                  label="Enter First Name"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="lastname"
                  label="Enter Last Name"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="username"
                  label="Enter Username"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="email"
                  label="Enter Email"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="password"
                  label="Enter Pasword"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="phone"
                  label="Enter Phone "
                />
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </>
  );
};
export default LoginDialog;
