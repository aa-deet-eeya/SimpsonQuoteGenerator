import React from "react";
import QuoteBox from "./Components/QuoteBox";
import "./App.css";
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : 'default' ,
      author : 'F' ,
      imgURL : '' ,
      isLoading : true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({isLoading : true},()=>{
      this.getQuote()
    })
    
  };

  getQuote = ()=>{
    axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`)
      //.then(res=>{ res.json() })
      .then(result=>{
        const data = result.data[0]
        
        this.setState({
          quote : data.quote ,
          author : data.character ,
          imgURL : data.image ,
          isLoading : false
        })
      })
  }


  componentDidMount() {
    this.getQuote()
  }

  render() {
    const {quote, author, imgURL , isLoading} = this.state
    return (
      <>
        <h2 className="header">Random Simpson Quote Generator</h2>
        <div id="quote-box">
        
          {isLoading ? <div className="loadingSpinner"></div> :  <QuoteBox quote={quote} author={author} img={imgURL}/>}
        </div>
        <button onClick={this.handleClick}>Generate Another Quote</button>
        
      </>
    );
  }
}

export default App;
