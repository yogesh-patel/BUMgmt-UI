import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { withRouter } from 'react-router-dom';
import loginPageStyle from "assets/jss/material-dashboard-react/views/loginPage.jsx";
import image from "assets/img/bg7.jpg";
import { connect } from 'react-redux';
import * as authActions from '../../actions/user.actions';
import { validateInputData ,validateEmail } from "../../validations/LoginPage";
import { bindActionCreators } from "redux";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username:"",
      password:"" ,
      errors: {},
      invalidUserError: ""        
          
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  userNameChangeHandler(event){
    const{ errors,isValid} = validateEmail(event.target.value)    

    if(!isValid && event.target.value !==''){
      this.setState({
          errors,
          username: event.target.value
        });
    }else{
      let errors = this.state.errors;
      errors.username= "";
      this.setState({
        errors,
        username: event.target.value
      })
    }    
  }

  passwordChangeHandler(event){
    this.setState({password: event.target.value});
  }

  isValid(){
    const{ errors,isValid} = validateInputData(this.state)
    if(!isValid){
      this.setState({errors})
    }     
      return isValid;
  }

  loginHandler(event){
      event.preventDefault();  
      if(this.isValid()) {
        const { username, password} = this.state;        
        if (username && password) {
            this.props.authActions.login(username,password)
        }
      }   
      
  }
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>      
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>                           
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>                    
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login </h4>                      
                    </CardHeader>
                    <p className={classes.divider}></p>                    
                    <CardBody>               
                      <center><b><font size="4" color="red">{this.props.invalidUserError}</font></b></center> 
                      <CustomInput
                        labelText="Username"
                        id="Username" 
                        error = {this.state.errors.username ? true : false} 
                        errorMessage = {this.state.errors.username}
                        onChange = {(event) => {this.userNameChangeHandler(event)}}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /> 
                                         
                      <CustomInput
                        labelText="Password"
                        id="pass"  
                        error = {this.state.errors.password ? true : false}  
                        errorMessage = {this.state.errors.password}                   
                        onChange = {(event) => {this.passwordChangeHandler(event)}}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    
                      <Button onClick = {(event) => this.loginHandler(event)}simple color="primary" size="lg">
                        Get started
                      </Button> 
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userToken: state.auth.authDetails.token,  
  invalidUserError : state.auth.invalidUserError
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions,dispatch)

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(loginPageStyle)(LoginPage)));
