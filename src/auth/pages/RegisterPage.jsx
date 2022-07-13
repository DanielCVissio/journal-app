import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";


const formData={
  email: '',
  password:'',
  displayName: ''    
}
// formValidations es un objeto que tiene los mismos nombres del campo del formulario cuyo valor es un arreglo con pares de valores.
const formValidations={
  //arreglo que la primera posicion es la funcion que lo va a evaluar, y el segundo el mensaje de error
  email: [(value)=> value.includes('@'),'email must contain @.'],
  password: [(value)=> value.length>=6,'password must contain more than 6 letters.'],
  displayName: [(value)=> value.length>=1,'Username is quired.']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const[formSubmitted, setFormSubmitted]=useState(false);
  
  const {status, errorMessage}   = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(()=> status === 'checking',[status]);

  const {
    formState,displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  }=useForm(formData, formValidations);

  
  const onSubmit=(event)=>{
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Register PowerMax'>

        <form onSubmit={ onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Username" 
                type="text" 
                placeholder='UserName'
                fullWidth
                name="displayName"
                value={displayName}
                onChange={ onInputChange}
                error={!!displayNameValid && formSubmitted }
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Email" 
                type="email" 
                placeholder='corre@google.com'
                fullWidth
                name="email"
                value={email}
                onChange={ onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password" 
                type="password" 
                placeholder='Password'
                fullWidth
                name="password"
                value={password}
                onChange={ onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              
              <Grid 
                item 
                xs={12} 
                display={!!errorMessage ? '' : 'none'} //es nulo, pero la doble negacion lo vuelve un boolean
              >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication} 
                  type="submit"
                  variant='contained' 
                  fullWidth>
                  Create Account
                </Button>
              </Grid>

            </Grid>

            
            
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Are you registered?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Login
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
        
  )
}