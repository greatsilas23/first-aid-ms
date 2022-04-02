import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ICON_A from './[removal.ai]_tmp-6246f80563949.png'
import ICON_B from './154957.svg'
import ICON_C from './striking-splinter.svg'
import ICON_D from './Blood_drop_plain.svg.png'
import ICON_E from './sprained-ankle.svg'
import ICON_F from './Sprain.png'
import ICON_G from './154957.svg'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        showLogin: true,
        showMenu: false,
        showBurnsIcon: true,
        showBurnsProcedure: false,
        showBruisesIcon: true,
        showBruisesProcedure: false,
        showCutsIcon: true,
        showCutsProcedure: false,
        showStingsIcon: true,
        showStingsProcedure: false,
        showSplintersIcon: true,
        showSplintersProcedure: false,
        showSunburnsIcon: true,
        showSunburnsProcedure: false,
        showNosebleedsIcon: true,
        showNosebleedsProcedure: false,
        showSprainsIcon: true,
        showSprainsProcedure: false,
        showFracturesIcon: true,
        showFracturesProcedure: false,
        showRoot: false,
        tools: {
            plasters: 'plasters',
            gauzeDressings: 'gauze-dressings',
            eyeDressings: 'eye-dressings',
            bandages: 'bandages',
            safetyPin: 'safety-pin',
            gloves: 'gloves',
            tweezers: 'tweezers'
        },
        injuries: {
            cuts: 'A skin wound with separation of the connective tissue elements\n',
            burns: 'Tissue damage from hot liquids, the sun, flames, chemicals, electricity or steam\n',
            stings: 'Bites from insects\n',
            splinters: 'Objects that become embedded under the skin\n',
            sunburns: 'Red, painful skin that feels hot to touch\n',
            nosebleeds: 'Oozing out of blood from the nose\n',
            sprains: 'Injury to a ligament caused by tearing of the fibers of the ligament\n',
            fractures: 'A broken bone\n'
        },
        procedures: {
            cuts: 'Wash your hands\nStop the bleeding\nClean the wound\nApply an antibiotic or petroleum jelly\nCover the wound\nChange the dressing\nGet a tetanus shot',
            burns: 'Cool the burn\nRemove rings or other tight items from burned area, do not poke blisters\nApply lotion\nBandage the burn',
            stings: 'Move to safe area to avoid more stings\nRemove any stingers\nWash the area with soap and water',
            splinters: 'Apply a cloth dampened with cold water to the area of the bite for 10 to 20 minutes',
            sunburns: 'Cool the skin\nApply moisturizer/lotion\nDrink water to prevent dehydration, do not break small blisters\nTake a pain reliever',
            nosebleeds: 'Sit upright and lean forward\nBlow your node\nPinch your nose, do not pick or blow nose/bend down',
            sprains: 'Rest the injured limb\nIce the area\nCompress the area with a bandage\nElevate the injured limb above your heart',
            fractures: 'Stop any bleeding\nImmobilize the injured area\nApply ice packs\nTreat for shock'
        }
    }
  }

  handleLogin = () => {
    this.setState({ showMenu: true})
    this.setState({ showRoot: false})
    this.setState({ showLogin: false})
  }

  handleLogout = () => {
    this.setState({ showRoot: true})
    this.setState({ showMenu: false})
    this.setState({ showLogin: true})
  }

  handleCutsShow = () =>{
    this.setState({showCutsProcedure: true})
    this.setState({showCutsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showBurnsIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.state.setState({showMenu: false})
  }
  handleCutsHide = () => {
    this.setState({showCuts: false})
    this.state.setState({showMenu: true})
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
  handleStingsShow = () =>{
    this.setState({showStings: true})
  }
  handleStingsHide = () => {
    this.setState({ showStings: false})
  }
  handleSplintersShow = () =>{
    this.setState({showSplinters: true})
  }
  handleSplintersHide = () => {
    this.setState({ showSplinters: false})
  }
  handleSunburnsShow = () =>{
    this.setState({showSunburns: true})
  }
  handleSunburnsHide = () => {
    this.setState({ showSunburns: false})
  }
  handleSprainsShow = () =>{
    this.setState({showSprains: true})
  }
  handleSprainsHide = () => {
    this.setState({ showSprains: false})
  }
  handleFracturesShow = () =>{
    this.setState({showFractures: true})
  }
  handleFracturesHide = () => {
    this.setState({ showFractures: false})
  }
  render(){
      return (
        <View
            style={styles.root}
        >
          {this.state.showLogin &&
            <View

            >
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
                <View
                    style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                >
                    <Button
                        style={styles.button.login}
                        title="LOG IN"
                        onPress={this.handleLogin}
                        color="#45ada8"
                    >
                    </Button>
                    <Button
                        style={styles.button.clear}
                        title="REGISTER"
                        onPress={this.handleRegister}
                        color="#45ada8"
                    >
                    </Button>
                </View>
            </View>
          }
          {this.state.showMenu &&
            <View
                style={styles.menu}
            >
                {this.state.showCutsIcon &&
                    <View
                        style={styles.item}
                    >
                        <Button
                            title="CUTS"
                            onPress={this.handleCutsShow}
                            style={styles.menuButton.cuts}
                            color="#45ada8"
                        >
                        </Button>
                    </View>
                }
                {this.state.showBurnsIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="BURNS"
                        onPress={this.handleBurnsShow}
                        style={styles.menuButton.burns}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showBurnsProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.burns}
                                {this.state.procedures.burns}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleBurnsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }
                {this.state.showBruisesIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="BRUISES"
                        onPress={this.handleBruisesShow}
                        style={styles.menuButton.bruises}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showBruisesProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.bruises}
                                {this.state.procedures.bruises}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleBruisesHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }
                {this.state.showStingsIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Sting"
                        onPress={this.handleStingsShow}
                        style={styles.menuButton.sting}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showStingsProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.stings}
                                {this.state.procedures.stings}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleStingsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                    </View>
                }
                {this.state.showSplintersIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Splinter"
                        onPress={this.handleSplintersShow}
                        style={styles.menuButton.splinter}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showSplintersProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.splinters}
                                {this.state.procedures.splinters}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleSplintersHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }

                {this.state.showSunburnsIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Sunburns"
                        onPress={this.handleSunburnsShow}
                        style={styles.menuButton.sunburns}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showSunburnsProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.sunburns}
                                {this.state.procedures.sunburns}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleSunburnsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }
                {this.state.showNosebleedsIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Nosebleeds"
                        onPress={this.handleNosebleedsShow}
                        style={styles.menuButton.nosebleeds}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showNosebleedsProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.nosebleeds}
                                {this.state.procedures.nosebleeds}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleNosebleedsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }

                {this.state.showSprainsIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Sprains"
                        onPress={this.handleSprainsShow}
                        style={styles.menuButton.sprains}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showSprainsProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.sprains}
                                {this.state.procedures.sprains}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleSprainsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }

                {this.state.showFracturesIcon &&
                <View
                    style={styles.item}
                >
                    <Button
                        title="Fractures"
                        onPress={this.handleFracturesShow}
                        style={styles.menuButton.fractures}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showFracturesProcedure &&
                        <View
                            style={styles.card}
                        >
                            <Text>
                                {this.state.injuries.fractures}
                                {this.state.procedures.fractures}
                            </Text>
                            <Button
                                title="HIDE"
                                onPress={this.handleFracturesHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    }
                </View>
                }
                {this.state.showCutsProcedure &&
                    <View
                        style={styles.card}
                    >
                        <Text>
                            {this.state.injuries.cuts}
                            {this.state.procedures.cuts}
                        </Text>
                        <Button
                            title="HIDE"
                            onPress={this.handleCutsHide}
                            style={styles.button}
                            color="#45ada8"
                        >
                        </Button>
                    </View>
                }
                <Button
                    title="LOG OUT"
                    onPress={this.handleLogout}
                    color="#45ada8"
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
        backgroundColor: '#9de0ad',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    button: {
        login:{
            width: '20vw',
            height: '10vh'
        },
        register:{
            width: '20vw',
            height: '10vh'
        }
    },
    menu: {
        width: '70vw',
        height: '80vh',
        flexDirection: 'column',
        backgroundColor: '#e5fcc2',
        overflowY: 'scroll',
        scrollbarWidth: 'none'
    },
    menuButton: {
        cuts: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw',
        },
        burns: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw',
            backgroundImage: ICON_A
        },
        bruises: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        sting: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw',
            backgroundImage: ICON_B
        },
        splinter: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        sunburns: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        nosebleeds: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        sprains: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        fractures: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        }
    },
    item: {
        flexDirection: 'row',
        width: '50vw',
        height: '20vh',
        padding: '20px',
        margin: '5px',
        backgroundColor: '#547980'
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        alignItems: 'center',
        width: '40vw',
        height: '42vh',
        backgroundColor: '#e5fcc2',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
        borderBottomLeftRadius: '30px',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.5)',
        margin: '10px',
        overflowY: 'scroll',
        scrollbarWidth: 'none'
    },
    root: {
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e5fcc2',
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
