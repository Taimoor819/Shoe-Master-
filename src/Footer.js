import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Footer = ()=>{
    return(
        <Grid container  justify='center' style={{marginTop:10, backgroundColor:'#333',color:'white'}}>
            <Grid item>
                <Typography variant='h6'>Project Made By Taimour Qaisar 
                </Typography>
            </Grid>
        </Grid>
    )
}