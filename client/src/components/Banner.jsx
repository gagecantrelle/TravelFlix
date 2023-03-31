import React, { Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

class Banner extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quoteArray: [],
        currentQuote: ''
      }

    }
   
    logOutClick = () => {

    }


  render() {
  return (
<div>
<Button variant="contained" sx={{ width: 150 }} onClick={logOutClcik}>Click To Log Out</Button>
</div>
  )
}
}
    export default Banner;