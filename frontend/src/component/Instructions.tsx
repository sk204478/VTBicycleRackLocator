import { Paper, Typography } from '@mui/material';

const Instructions = () => {
    return ( 
        <Paper elevation={4} sx={{ padding: 1, display: 'block', height:"94.5%", borderRadius:'5px'}}>
            <Typography variant="h6" sx={{ marginBottom: 0.1 }}>
                How to Use
            </Typography>
            <Typography variant="body2">
                This is a paragraph on how to use this website.
            </Typography>
        </Paper>
     );
}
 
export default Instructions;