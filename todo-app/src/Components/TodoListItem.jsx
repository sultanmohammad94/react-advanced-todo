import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper } from '@mui/material';

export default function TodoListItem({text}) {  
  return (
    <Paper sx={{width:"100%"}}>
      <CardHeader 
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      title={<Typography variant='body2'>{text}</Typography>}
      />
    </Paper>
  );
}
