import React, {Component} from 'react';
import DogDisplay from './DogDisplay';

export default class DogIndex extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }

    fetchResults(){
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    img: data.message
                })
            })
            .catch(err => console.log({
                err,
                message: 'something went wrong with the fetch'
            }))
    }

    componentDidMount(){
        this.fetchResults()
    }

    newPhoto(){
        this.fetchResults()
    }

    render(){
        return(
            <div>
                <h2>Random Dog Photo</h2>
                <button onClick={(e)=>this.newPhoto(e)}>New Photo</button>
                <DogDisplay img={this.state.img} />
            </div>
        )
    }
}