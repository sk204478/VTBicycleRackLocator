import { Grid } from '@mui/material';

function Weather() {
  return (
    <Grid item xs={12}>
        <div className="weather" >
        <a 
          className="weatherwidget-io" 
          href="https://forecast7.com/en/37d23n80d41/blacksburg/" 
          data-label_1="VIRGINIA TECH" 
          data-label_2="Bicycle Rack Locator" 
          data-font="Roboto" 
          data-icons="Climacons Animated" 
          data-theme="original" 
          data-basecolor="#861F41" 
          data-accent="rgba(255, 255, 255, 0.09)" 
          data-suncolor="#F7EA48" 
          data-mooncolor="#F7EA48" 
          data-cloudcolor="#E5E1E6" 
          data-cloudfill="#E5E1E6" 
          >
            BLACKSBURG WEATHER
          </a>
        </div>
    </Grid>
  );
}

export default Weather;