import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';

function Home() {
    return (
        <div>
            <TextField id='name' label="Name" variant='outlined' required></TextField>
            <Button variant="contained">hello there</Button>
            <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
        </div>
    )
}

export default Home