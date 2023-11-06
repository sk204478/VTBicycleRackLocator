import { Grid } from '@mui/material'; 
import DemoVideo from "../component/DemoVideo";
import Feedback from "../component/Feedback"
import Instructions from "../component/Instructions"


function Help () {

  return (
    <Grid container spacing={1}>
        <Grid item xs={12} md={5} lg={5} sx={{height:"300px"}}>
          <DemoVideo/>
        </Grid>
        <Grid item xs={12} md={7} lg={7} sx={{height:"300px"}}>
          <Instructions/>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Feedback/>
        </Grid>
    </Grid>

  );
}

export default Help;
