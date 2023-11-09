import { Grid } from '@mui/material';
import Instructions from "../component/Instructions"


function Help() {

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12} >
        <Instructions />
      </Grid>
    </Grid>

  );
}

export default Help;
