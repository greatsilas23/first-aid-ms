import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        showLogin: true,
        showMenu: false,
        showBurns: false,
        showBruises: false,
        showCuts: false
    }
  }
  handleLogin = () => {
    this.setState({ showLogin: false})
    this.setState({ showMenu: true})
  }
  handleLogout = () => {
    this.setState({ showMenu: false})
    this.setState({ showLogin: true})
  }
  handleCutsShow = () =>{
    this.setState({showCuts: true})
  }
  handleCutsHide = () => {
    this.setState({ showCuts: false})
  }
  handleBurnsShow = () =>{
    this.setState({showBurns: true})
  }
  handleBurnsHide = () => {
    this.setState({ showBurns: false})
  }
  handleBruisesShow = () =>{
    this.setState({showBruises: true})
  }
  handleBruisesHide = () => {
    this.setState({ showBruises: false})
  }

  render(){

      return (
        <View
            style={styles.root}
        >
          {this.state.showLogin &&
            <View>
            <Text
                style={styles.text}
            >
                LOG IN
            </Text>
            <TextInput
                style={styles.input}
                placeholder="user001"
            />
            <TextInput
                style={styles.input}
                placeholder="****"
            />
            <Button
                style={styles.button}
                title="LOG IN"
                onPress={this.handleLogin}
            >
            </Button>
            </View>
          }
          {this.state.showMenu &&
            <View
                style={styles.menu}
            >
                <View
                    style={styles.item}
                >
                    <Button
                        title="CUTS"
                        onPress={this.handleCutsShow}
                        style={styles.menuButton}
                    >
                    </Button>
                    {this.state.showCuts &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                Cuts refer to piercings on the skin that cause blood to flow out
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleCutsHide}
                                style={styles.button}
                            >
                            </Button>
                        </View>
                    }
                </View>
                <View
                    style={styles.item}
                >
                    <Button
                        title="BURNS"
                        onPress={this.handleBurnsShow}
                        style={styles.menuButton}
                    >
                    </Button>
                    {this.state.showBurns &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                Burns refer to inflamations on the skin caused by hot objects or fire
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleBurnsHide}
                                style={styles.button}
                            >
                            </Button>
                        </View>
                    }
                </View>
                <View
                    style={styles.item}
                >
                    <Button
                        title="BRUISES"
                        onPress={this.handleBruisesShow}
                        style={styles.menuButton}
                    >
                    </Button>
                    {this.state.showBruises &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                Bruises refer to scrapes made on the skin due to friction
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleBruisesHide}
                                style={styles.button}
                            >
                            </Button>
                        </View>
                    }
                </View>
                <Button
                    title="LOG OUT"
                    onPress={this.handleLogout}
                >
                </Button>
            </View>
          }
        </View>

      )
  }
}

const styles = StyleSheet.create({
    input: {
        width: '30vw',
        height: '5vh',
        backgroundColor: 'grey',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: 'grey',
	    width: '40vw',
	    height: '10vh',
	    borderRadius: '10px'
    },
    menu: {
        width: '70vw',
        height: '70vh',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    menuButton: {
        width: '40vw',
        height: '20vh',
        borderRadius: '10vw'
    },
    item: {
        flexDirection: 'row',
        width: '50vw',
        height: '20vh',
        padding: '20px',
        margin: '5px'
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        alignItems: 'center',
        width: '40vw',
        height: '15vh',
        backgroundColor: 'white',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
        borderBottomLeftRadius: '30px',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.5)',
        margin: '10px'
    },
    root: {
        flexDirection: 'row',
        width: '80vw',
        height: '70vh',
        backgroundColor: 'black',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: '10px',
        fontWeight: 'bold'
    }
})
