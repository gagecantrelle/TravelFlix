import React, { useState, useRef, useEffect } from 'react';
// import { Card } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  console.log(activityFeedUsers && activityFeedUsers[0])
  return (
    <Card sx={{ minWidth: 275, height: '275px', width: '275px' }}>

      {/* // <Card sx={{ minWidth: 275 }}> */}
      <CardContent>
        {Array.isArray(activityFeedUsers) && activityFeedUsers.map((user) => (
          <div key={user.id}>
            <Typography variant="body1">
              {user.userName}
            </Typography>
            <Typography variant="body2">
              {user.comments}
            </Typography>
          </div>
        ))}
      </CardContent>
      <CardActions />

    </Card>
  );
}

export default UserFeed;
