# VTBicycleRackLocator - MERN full stack

There will be an update for README soon...
I accidentally exposed my API key so, I re-created it...

## Demo Video
### click below thumbnail to redirect to youtube video link
[![Watch the video](https://cdn.discordapp.com/attachments/335489602515238914/1171982810064617522/image.png)](https://youtu.be/tGxz1YhQksw?si=nFcCl-UGsyCowdjr)

## Requirements
You need 2 .env files for each backend and frontend directory.

For backend .env
```
MONGO_URI=your MongoDB atlas address
PORT=3000
```

For frontend .env
```
REACT_APP_GOOGLE_MAPS_API_KEY=Your Google API key
REACT_APP_API_HOST=http://localhost:3000 or whatever the host of your backend server.
```

For data, use the sample data on `fronend/datas/` if you just want to test the frontend locally.
These data are public data.

## How to run
In the `backend` directory,
```
npm i
node server.js
```
In the `frontend` directory,
```
npm i
npm run start
```

## Used tools
Frontend: React typescript with MUI framework.\
Backend: Node.js and Express\
Database: MongoDB Atlas\
Weather Component : [Weatherwidget](https://weatherwidget.io)
