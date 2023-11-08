import { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, Paper, Box, Alert, Typography}from '@mui/material';


const Feedback = () => {
    const [feedback, setFeedback] = useState({
        email: "",
        type: "suggestion",
        text: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({...feedback, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.email && feedback.type && feedback.text) {
            /* Handle where the feedback goes here */
            console.log(feedback);
          setFeedback({
            email: "",
            type: "",
            text: "",
          });
          setSubmitted(true);
          setShowError(false);
        } else {
          setShowError(true);
        }
      };

    return ( 
    <Paper elevation={4} sx={{ padding: 1.5 }}>
        <Box >
        <Typography variant="h6" sx={{ marginBottom:1 }}>
            Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
            {showError && (
            <Alert severity="error">
                Please complete all fields before submitting!
            </Alert>
            )}
            {submitted ? (<Alert severity="success">
                Thanks for your feedback!
                </Alert>
            ) : (
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                size="small"
                fullWidth
                label="Your Email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Select
                size="small"
                fullWidth
                label="Type"
                name="type"
                value={feedback.type}
                onChange={handleChange}
            >
                <MenuItem value="suggestion">Suggestion</MenuItem>
                <MenuItem value="issue">Issue</MenuItem>
                <MenuItem value="compliment">Other</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Feedback"
                name="text"
                multiline
                rows={9}
                value={feedback.text}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" size="small">
                    Send feedback
                </Button>
            </Grid>
            </Grid>)}
        </form>
        </Box>
    </Paper>
     );
}
 
export default Feedback;