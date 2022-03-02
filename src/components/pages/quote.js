import React, { Component } from 'react';
import Navbar from "../navbar"
import Footer from "../footer"


export default class App extends Component {
    constructor() {
        super()

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const getQuote = async () => {
            const now = new Date()
            let dateData = {}

            await fetch("https://qotd-dhs.herokuapp.com/date/get")     
            .then(response => response.json())
            .then(data => dateData = data)
            .catch(error => console.log("Error getting date", error))
            
            if (dateData.day === now.getUTCDate()) {
                console.log("Updating date")
                await fetch("https://qotd-dhs.herokuapp.com/date/update", {
                    method: "PUT", 
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        day: now.getDate()
                    })
                })
                .then(response => response.json())
                .then(data => dateData = data)
                .catch(error => console.log("Error updating date", error))

            }
            
            fetch(`https://qotd-dhs.herokuapp.com/quote/get/${dateData.quote}`)
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.log("Error getting quote", error))


        }

        getQuote()
    }

    render() {
        return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <p className="quote">{this.state.data.text}</p>
                <p className="author">-{this.state.data.author}</p>
            </div>


            <Footer />
        </div>
        );
    }
}
