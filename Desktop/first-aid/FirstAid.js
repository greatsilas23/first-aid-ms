import React from 'react'

import Rating from './Rating.js'
import Submit from './Submit.js'
import Icon from './Icon.js'


Class FirstAid extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cuts: {
                content: 'cuts',
                description: 'Cuts refer to piercings on skin by sharp objects'
            },
            bruises: {
                content: 'bruises',
                description: 'Bruises refer to scrapes on skin by sharp objects'
            }
            burns: {
                content: 'burns'
                description: ''
            }
            isVisible: false
        }
}
    }

    handleVisible(content, description){
        this.setState({ isVisible: false })
    }
    handleInvisible(content, description){
        this.setState({isVisible: true})
    }

    render(){
        return(
            <View>

            </View>
        )
    }
