import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register PowerMax'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Username" 
                type="text" 
                placeholder='UserName'
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Email" 
                type="email" 
                placeholder='corre@google.com'
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password" 
                type="password" 
                placeholder='Password'
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={12}>
                <Button variant='contained' fullWidth>
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