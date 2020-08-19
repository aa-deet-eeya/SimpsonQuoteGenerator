import React from 'react'
import '../App.css'

class QuoteBox extends React.Component {
    
    //constructor(props){
    //    super(props)
    
    //}

    render() {
       return (
        <>
            <div id="text">
                <div className="front">
                    <img src={this.props.img} alt="img" />
                </div>
                <div className="back">
                    <p>{this.props.quote}</p>
                    <p id="author">-By {this.props.author}</p>
                </div>
            </div>
        </>
       )
    }
}

export default QuoteBox