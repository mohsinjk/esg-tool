import { Button } from '@mui/material';
import React from 'react';

function button(props) {
    return (
  
        <div >
           <Button>  {props.name}</Button>
        </div>
     
    );
}

export default button;