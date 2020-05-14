import React, { Component } from 'react';
import Album from './cards';

class Cards extends Component {
    state = {  

        post:[
            {
                googleId:'H',
                Title:'Random Mountains ',
                Subheader:'01-12-2019',
                Description:'Nice beautiful mountains found on  google',
                link:"https://www.lg.com/us/images/TV/features/TV-UHD-UM75-A-02-4K-Resolution-Desktop.jpg"
            },
            {
                googleId:'H',
                Title:'Nice Sky ',
                Subheader:'10-04-2020',
                Description:'Beautiful image of the sky captured from my phone',
                link:'https://www.optoma.co/images/ProductApplicationFeatures/4kuhd/banner.jpg'
            }
        ]

    }
    render() { 
        return ( 
            this.state.post.map(i=><Album
                key={i.Title}
                googleId={i.googleId}
                Title={i.Title}
                Subheader={i.Subheader}
                Description={i.Description}
                link={i.link}
                
                />)
            
           );
    }
}
 
export default Cards;