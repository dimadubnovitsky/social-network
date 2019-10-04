import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginThunk, LogoutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLenght30 = maxLenghtCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required, maxLenght30]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <div>
            {props.isAuth
                ? <Redirect to={"/profile"}/>
                : <div><h1>Login</h1><LoginReduxForm onSubmit={onSubmit}/></div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginThunk, LogoutThunk})(Login);