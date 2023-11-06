import { Paper } from '@mui/material';

function DemoVideo() {
  return (
    <Paper elevation={4} sx={{display: 'block', height:"100%", borderRadius:'5px'}}>
      <video 
        width="100%"
        height="100%"
        controls>
        <source
          /* Add source for demo video here */
          src=""
          type="video/mp4" 
        /></video>
    </Paper>
  );
}

export default DemoVideo;
