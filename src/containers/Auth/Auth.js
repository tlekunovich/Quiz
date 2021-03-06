import React,{Component} from 'react';
import style from './Auth.module.css'
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input.js';
import is from 'is_js'
import axios from 'axios'




export default class Auth extends Component {
 
    state = {
        isFormValid: false,
        formControls:{
            email:{
                value:'',
                type:'email',
                label:'Email',
                errorMessage:'Введите корректный Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password:{
                value:'',
                type:'password',
                label:'Пароль',
                errorMessage:'Неверный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }  
            }
        }

    }


    registerHandler = async()=>{
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        
        }
        try{
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMx6F1DVoS9_7YRwKzWVpQnApVQgMAgg4',authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }

    }
   
    loginHandler = async ()=>{
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        
        }
        try{
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMx6F1DVoS9_7YRwKzWVpQnApVQgMAgg4',authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
            }
    
    submitHandler=(event)=>{
        event.preventDafault()
    }

    validateControl(value,validation){
        if(!validation){
            return true
        }
        let isValid = true
        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if(validation.email){
            isValid = is.email(value) && isValid
        }

        if(validation.minLength){
           isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value,control.validation)

        formControls[controlName]=control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs()
 {
     return Object.keys(this.state.formControls).map((controlName,index)=>{
         const control = this.state.formControls[controlName]
        return (
             <Input 
                key={controlName + index}
                autoComplete="current-password"
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                errorMessage={control.errorMessage}
                shouldValidate={!!control.validation}
                onChange={event => this.onChangeHandler(event,controlName)}
             />
         )
     })

 }    
    render () {
        return (
            <div className={style.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={style.AuthForm}>
                          
            {this.renderInputs()}

                        <Button 
                            type='success' 
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button 
                            type='primary' 
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                            >
                                Регистрация
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}