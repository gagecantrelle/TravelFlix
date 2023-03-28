import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Advance to the next user every second
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % activityFeedUsers.length);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activityFeedUsers.length]);

  const user = activityFeedUsers[index];

  return (
    <Paper sx={{ p: 2, width: 300 }}>
      <Typography variant="h6" gutterBottom>
        Activity Feed
      </Typography>
      <Typography variant="body1">
        {user && user.userName}
      </Typography>
      <Typography variant="body2" onClick={() => console.log("hi")} >
        {user && user.comments}
      </Typography>
    </Paper>
  );
}

export default UserFeed;
