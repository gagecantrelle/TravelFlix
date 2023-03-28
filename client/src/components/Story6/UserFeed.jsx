import React, { useState } from 'react';
// import { Card } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function UserFeed(props) {
  return (
    <Card sx={{ minWidth: 275, height: '275px', width: '275px' }}>

      {/* // <Card sx={{ minWidth: 275 }}> */}
      <CardContent>

        <Typography variant="body1">
          user1
        </Typography>
        <Typography variant="body1">
          user2
        </Typography>
        <Typography variant="body1">
          user3
        </Typography>
        <Typography variant="body1">
          user4
        </Typography>
      </CardContent>
      <CardActions />

    </Card>
  );
}

export default UserFeed;
