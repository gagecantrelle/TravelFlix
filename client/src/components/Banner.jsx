import React, { Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

class Banner extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quoteArray: ['\n"Wherever you go, there you are\n"'],
        currentQuote: '\n"Wherever you go, there you are\n"'
      }
     this.logOutClick = this.logOutClick.bind(this)
     this.changeQuoteClick = this.changeQuoteClick.bind(this)
    }
   
    logOutClick = () => {
      console.log('Logged Out')
    }

    changeQuoteClick = () => {
        console.log('Quote Changed')
      }


  render() {
  return (
<div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginLeft: 7}}>
        <div>{this.state.currentQuote}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flex: 1.9}}>
        <Button variant="contained" sx={{ width: 500, fontSize: 20 }} onClick={this.changeQuoteClick}>TravelFlix</Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginRight: 7}}>
        <Button variant="contained" sx={{ width: 150 }} onClick={this.logOutClick}>Log Out</Button>
    </div>
</div>
  )
}
}
    export default Banner;



    // render() {
    //     return (
    //   <div style={{display: 'flex', justifyContent: 'space-between'}}>
    //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //           <Button variant="contained" sx={{ width: 500, fontSize: 20 }} onClick={this.changeQuoteClick}>TravelFlix</Button>
    //       </div>
    //       <div style={{ display: 'flex', alignItems: 'left'}}>
    //           <div>{this.state.currentQuote}</div>
    //       </div>
    //       <div style={{ display: 'flex', alignItems: 'center'}}>
    //           <Button variant="contained" sx={{ width: 150 }} onClick={this.logOutClick}>Log Out</Button>
    //       </div>
    //   </div>
    //     )
    //   }
    //   }

