import { Grid, Box,Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, ListItemText } from "@mui/material"
//import { Box } from "@mui/system"
import {TurnedInNot} from '@mui/icons-material'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink:{ sm:0 }}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box',width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    List
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Productos','Ofertas','Nuestros Clientes','Quienes somos?'].map(text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'blablablab'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        
        </Drawer>        
    </Box>
  )
}
