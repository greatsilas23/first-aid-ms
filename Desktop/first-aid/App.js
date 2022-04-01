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
        showBurns: false,
        showBruises: false,
        showCuts: false,
        showStings: false,
        showSplinters: false,
        showSunburns: false,
        showNosebleeds: false,
        showSprains: false,
        showFractures: false,
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
            cuts: 'A skin wound with separation of the connective tissue elements',
            burns: 'Tissue damage from hot liquids, the sun, flames, chemicals, electricity or steam',
            stings: 'Bites from insects',
            splinters: 'Objects that become embedded under the skin',
            sunburns: 'Red, painful skin that feels hot to touch',
            nosebleeds: 'Oozing out of blood from the nose',
            sprains: 'Injury to a ligament caused by tearing of the fibers of the ligament',
            fractures: 'A broken bone'
        },
        procedures: {
            cuts: 'Wash your hands, stop the bleeding, clean the wound, apply an antibiotic or petroleum jelly, cover the wound, change the dressing, get a tetanus shot',
            burns: 'Cool the burn, remove rings or other tight items from burned area, do not poke blisters, apply lotion, bandage the burn',
            stings: 'move to safe area to avoid more stings, remove any stingers, wash the area with soap and water',
            splinters: 'apply a cloth dampened with cold water to the area of the bite for 10 to 20 minutes',
            sunburns: 'cool the skin, apply moisturizer/lotion, drink water to prevent dehydration, do not break small blisters, take a pain reliever',
            nosebleeds: 'sit upright and lean forward, blow your node, pinch your node, do not pick or blow nose/bend down',
            sprains: 'rest the injured limb, ice the area, compress the area with a bandage, elevate the injured limb above your heart',
            fractures: 'stop any bleeding, immobilize the injured area, apply ice packs, treat for shock'
        }
    }
  }

  handleLogin = () => {
    if(showLogin){
        this.setState({ showMenu: true})
        this.setState({ showLogin: false})
    }else{
        this.setState({ showRoot: true})
        this.setState({ showMenu: false})
        this.setState({ showLogin: true})
      }
  }
  handleLogout = () => {
  }
  handleRootShow = () => {
    if(!showRoot){
        this.setState({ showMenu: false})
        this.setState({ showLogin: false})
        this.setState({ showRoot: true})
    }else{
        this.setState({ showMenu: true})
        this.setState({ showLogin: true})
        this.setState({ showRoot: false})
      }
    }
  }
  handleRootHide = () => {
    }
  handleCutsShow = () =>{
    this.setState({showCuts: true})
    this.state.setState({showMenu: false})
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
  handleNosebleedsShow = () =>{
    this.setState({showNosebleeds: true})
  }
  handleNosebleedsHide = () => {
    this.setState({ showNosebleeds: false})
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
                color="#45ada8"
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
                        style={styles.menuButton.cuts}
                        color="#45ada8"
                    >
                    </Button>
                    {this.state.showCuts &&
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
                </View>

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
                    {this.state.showBurns &&
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
                    {this.state.showBruises &&
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
                    {this.state.showStings &&
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
                    {this.state.showSplinters &&
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
                    {this.state.showSunburns &&
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
                    {this.state.showNosebleeds &&
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
                    {this.state.showSprains &&
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
                    {this.state.showFractures &&
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
                <Button
                    title="LOG OUT"
                    onPress={this.handleLogout}
                    color="#45ada8"
                >
                </Button>
            </View>
          }
          {showRoot &&
            <View
                style={styles.dashboard}
            >
                <Text>
                    TOTAL ITEMS: {this.state.totalItems}
                    TOTAL PATIENTS: {this.state.totalPatients}
                    TOTAL STAFF: {this.state.totalStaff}
                    TOTAL PROCEDURES: {this.state.totalProcedures}
                </Text>
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
	    width: '40vw',
	    height: '10vh',
	    borderRadius: '10px'
    },
    menu: {
        width: '70vw',
        height: '70vh',
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
        }
        splinter: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },

        sunburns: {
            width: '40vw',

            height: '20vh',
            borderRadius: '10vw'
        }
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
        height: '15vh',
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
