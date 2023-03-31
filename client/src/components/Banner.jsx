import React, { Component } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'


class Banner extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quoteArray: [
        '\n" Get off my plane\n"',
        `\n" Surely you can\n't be serious\n"`,
        '\n" Nice try Lau-Che\n"',
        '\n" Get to the chopper\n"',
        '\n" Put the bunny back in the box\n"',
        '\n" Show me all the blueprints\n"',
        '\n" Fly, you fools\n"'],
     currentQuote: '\n"Wherever you go, there you are\n"'
      }
     this.logOutClick = this.logOutClick.bind(this)
     this.changeQuoteClick = this.changeQuoteClick.bind(this)
    }
   
    logOutClick = () => {
        window.location.href = '/logout';
    }

    changeQuoteClick = () => {
        this.setState({ currentQuote: this.state.quoteArray[Math.floor(Math.random() * 7)] })
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


