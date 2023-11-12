# VTBicycleRackLocator - MERN Full Stack Application

Welcome to VTBicycleRackLocator, an application developed to assist Virginia Tech students in locating bicycle racks across campus. While existing campus resources offer basic locator features, VTBicycleRackLocator elevates the experience by integrating additional functionalities tailored to enhance convenience. This tool helps students venture to unfamiliar parts of the campus, ensuring they can easily find a place to park their bicycles.

## Key Features

- **Interactive Map**: Navigate Virginia Tech's campus with an interactive map pinpointing all bicycle rack locations.
- **Filter Options**: Tailor the map view to display only covered racks or those near specified buildings.
- **Directions Service**: Get biking directions from point A to point B directly within the app.
- **User-Friendly Interface**: Designed with a focus on simplicity and ease of use.

## Demo Video

Click the thumbnail below to watch a walkthrough of the VTBicycleRackLocator in action on YouTube.

[![Watch the video](https://cdn.discordapp.com/attachments/335489602515238914/1171982810064617522/image.png)](https://youtu.be/tGxz1YhQksw?si=nFcCl-UGsyCowdjr)

## Getting Started

To run VTBicycleRackLocator, you'll need two `.env` files for the backend and frontend directories respectively.

### Backend .env Configuration
```env
MONGO_URI=<Your MongoDB Atlas URI>
PORT=3000
```

### Frontend .env Configuration
```env
REACT_APP_GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>
REACT_APP_API_HOST=<Your Backend Server Host>
```
### Sample Data
Utilize the sample data in `frontend/datas/` for a local test run if you did not set up MongoDB. These datasets are derived from public-domain information.

## Running the Application
### Backend Setup
Navigate to the `backend` directory and execute,
```shell
npm install
node server.js
```
Navigate to the `frontend` directory and execute,
```shell
npm i
npm run start
```

## Technologies Employed
- **Frontend**: React typescript with MUI framework.\
- **Backend**: Node.js and Express\
- **Database**: MongoDB Atlas\
- **Weather** Component : [Weatherwidget](https://weatherwidget.io)
