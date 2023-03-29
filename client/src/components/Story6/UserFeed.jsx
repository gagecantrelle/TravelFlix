import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [userId, setUserId] = useState(Object.keys(activityFeedUsers)[0]);

  function handleClick(event) {
    console.log(`Clicked ${event}`);
  }

  useEffect(() => {
    const userCount = Object.keys(activityFeedUsers).length;
    const intervalId = setInterval(() => {
      setUserId((prevUserId) => {
        const userIds = Object.keys(activityFeedUsers);
        const currentIndex = userIds.indexOf(prevUserId);
        const nextIndex = (currentIndex + 1) % userCount;
        return userIds[nextIndex];
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activityFeedUsers]);

  const user = activityFeedUsers[userId];



  return (
    <Paper sx={{ p: 2, width: 300, height: 150 }}>
      <Typography variant="h6" gutterBottom>
        Activity Feed
      </Typography>
      <Typography variant="body1" onClick={() => console.log(user.userName)}>
        {user && user.userName}
      </Typography>
     
    </Paper>
  );
}
export default UserFeed