import { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';

function Weather() {
  useEffect(() => {
    // Function to add the script to the page
    const addWeatherWidgetScript = () => {
      const script = document.createElement('script');
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      script.id = 'weatherwidget-io-js';
      document.body.appendChild(script);
    };

    // Add the script if it doesn't exist
    if (!document.getElementById('weatherwidget-io-js')) {
      addWeatherWidgetScript();
    }

    // Cleanup the script when the component unmounts
    return () => {
      const script = document.getElementById('weatherwidget-io-js');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Grid item xs={12}>
      <Paper elevation={4} style={{ borderRadius: "1px" }}>
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
      </Paper>
    </Grid>
  );
}

export default Weather;
