import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';
import burns from "./[removal.ai]_tmp-6246f80563949.png"
import stings from './154957.svg'
import splinters from './striking-splinter.svg'
import nosebleeds from './Blood_drop_plain.svg.png'
import sprains from './sprained-ankle.svg'
import fractures from './Sprain.png'
import sunburns from './sunburn.png'
import bruises from './bruise.png'
import cuts from './cuts.png'
import search from './search.png'
import login from './login.png'
import menu from './menu.png'
import { db } from './firebase'

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

        injuries: {
            cuts: 'A skin wound with separation of the connective tissue elements\n',
            burns: 'Tissue damage from hot liquids, the sun, flames, chemicals, electricity or steam\n',
            bruises: 'An injury appearing as an area of discoloured skin on the body caused by a blow or impact rupturing underlying blood vessels',
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
            bruises: 'Rest the bruises area\nIce the bruise with an ice pack wrapped in a towel for 10 to 20 minutes\nCompress the bruised area if it is swelling\nElevate the injured area',
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
    this.setState({ showLogin: false})
  }

  handleLogout = () => {
    this.setState({ showMenu: false})
    this.setState({ showLogin: true})
  }

  handleCutsShow = () =>{
    this.setState({showCutsProcedure: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showBurnsIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleCutsHide = () => {
    this.setState({showCutsProcedure: false})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleBurnsShow = () =>{
    this.setState({showBurnsProcedure: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleBurnsHide = () => {
    this.setState({showBurnsProcedure: false})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleBruisesShow = () =>{
    this.setState({showBruisesProcedure: true})
    this.setState({showBruisesIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleBruisesHide = () => {
    this.setState({showBruisesProcedure: false})
    this.setState({showBruisesIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleStingsShow = () =>{
    this.setState({showStingsProcedure: true})
    this.setState({showStingsIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleStingsHide = () => {
    this.setState({showStingsProcedure: false})
    this.setState({showStingsIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleSplintersShow = () =>{
    this.setState({showSplintersProcedure: true})
    this.setState({showSplintersIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showMenu: true})
  }
  handleSplintersHide = () => {
    this.setState({showSplintersProcedure: false})
    this.setState({showSplintersIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showMenu: true})
  }
  handleSunburnsShow = () =>{
    this.setState({showSunburnsProcedure: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleSunburnsHide = () => {
    this.setState({showSunburnsProcedure: false})
    this.setState({showSunburnsIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
    handleNosebleedsShow = () =>{
      this.setState({showNosebleedsProcedure: true})
      this.setState({showNosebleedsIcon: true})
      this.setState({showSunburnsIcon: false})
      this.setState({showBurnsIcon: false})
      this.setState({showCutsIcon: false})
      this.setState({showStingsIcon: false})
      this.setState({showFracturesIcon: false})
      this.setState({showBruisesIcon: false})
      this.setState({showSprainsIcon: false})
      this.setState({showSplintersIcon: false})
      this.setState({showMenu: true})
    }
  handleNosebleedsHide = () => {
    this.setState({showNosebleedsProcedure: false})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleSprainsShow = () =>{
    this.setState({showSprainsProcedure: true})
    this.setState({showSprainsIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showFracturesIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleSprainsHide = () => {
    this.setState({showSprainsProcedure: false})
    this.setState({showSprainsIcon: true})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
  }
  handleFracturesShow = () =>{
    this.setState({showFracturesProcedure: true})
    this.setState({showFracturesIcon: true})
    this.setState({showBurnsIcon: false})
    this.setState({showCutsIcon: false})
    this.setState({showStingsIcon: false})
    this.setState({showNosebleedsIcon: false})
    this.setState({showSunburnsIcon: false})
    this.setState({showBruisesIcon: false})
    this.setState({showSprainsIcon: false})
    this.setState({showSplintersIcon: false})
    this.setState({showMenu: true})
  }
  handleFracturesHide = () => {
    this.setState({showFracturesProcedure: false})
    this.setState({showBurnsIcon: true})
    this.setState({showCutsIcon: true})
    this.setState({showStingsIcon: true})
    this.setState({showFracturesIcon: true})
    this.setState({showNosebleedsIcon: true})
    this.setState({showSunburnsIcon: true})
    this.setState({showBruisesIcon: true})
    this.setState({showSprainsIcon: true})
    this.setState({showSplintersIcon: true})
    this.setState({showMenu: true})
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
            <ScrollView
                style={styles.menu}
            >
                <View
                    style={{position: 'fixed' ,flexDirection: 'row', width: '50vw', height: '7vh', backgroundColor: 'white', position: 'sticky'}}
                >
                    <Image
                        style={{height: '5vh', width: '5vw'}}
                        source={menu}
                    />
                    <TextInput
                        style={{height: '5vh', width: '40vw'}}
                        placeholder="search"
                    />
                    <Image
                        style={{height: '5vh', width: '5vw'}}
                        source={search}
                    />
                </View>
                {this.state.showCutsIcon &&
                    <View
                        style={styles.item}
                    >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={cuts}
                        />
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
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={burns}
                        />

                        <Button
                            title="BURNS"
                            onPress={this.handleBurnsShow}
                            style={styles.menuButton.burns}
                            color="#45ada8"
                        >
                        </Button>

                    </View>
                }
                {this.state.showBruisesIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={bruises}
                        />

                    <Button
                        title="BRUISES"
                        onPress={this.handleBruisesShow}
                        style={styles.menuButton.bruises}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }
                {this.state.showStingsIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={stings}
                        />

                    <Button
                        title="Sting"
                        onPress={this.handleStingsShow}
                        style={styles.menuButton.sting}
                        color="#45ada8"
                    >
                    </Button>
                    </View>
                }
                {this.state.showSplintersIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={splinters}
                        />

                    <Button
                        title="Splinter"
                        onPress={this.handleSplintersShow}
                        style={styles.menuButton.splinter}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }

                {this.state.showSunburnsIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={sunburns}
                        />

                    <Button
                        title="Sunburns"
                        onPress={this.handleSunburnsShow}
                        style={styles.menuButton.sunburns}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }
                {this.state.showNosebleedsIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={nosebleeds}
                        />

                    <Button
                        title="Nosebleeds"
                        onPress={this.handleNosebleedsShow}
                        style={styles.menuButton.nosebleeds}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }

                {this.state.showSprainsIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={sprains}
                        />

                    <Button
                        title="Sprains"
                        onPress={this.handleSprainsShow}
                        style={styles.menuButton.sprains}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }

                {this.state.showFracturesIcon &&
                <View
                    style={styles.item}
                >
                        <Image
                            style={{height: '10vh', width: '10vw'}}
                            source={fractures}
                        />

                    <Button
                        title="Fractures"
                        onPress={this.handleFracturesShow}
                        style={styles.menuButton.fractures}
                        color="#45ada8"
                    >
                    </Button>
                </View>
                }
                {this.state.showSprainsProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.sprains}
                             </View>
                             <View>
                             {this.state.procedures.sprains}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=BZMD3cfyjVI')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleSprainsHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }
                {this.state.showNosebleedsProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.nosebleeds}
                             </View>
                             <View>
                             {this.state.procedures.nosebleeds}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iuri98TjKKU')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleNosebleedsHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }
                {this.state.showFracturesProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.fractures}
                             </View>
                             <View>
                             {this.state.procedures.fractures}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=55UYalxJRtE')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleFracturesHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }
                {this.state.showBruisesProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.bruises}
                             </View>
                             <View>
                             {this.state.procedures.bruises}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DkOmr3BEkvE')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleBruisesHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }

                {this.state.showCutsProcedure &&
                    <View
                        style={styles.card}
                    >
                        <Text>
                            <View
                                style={{backgroundColor: '#547980'}}
                            >
                            {this.state.injuries.cuts}
                            </View>
                            <View>
                            {this.state.procedures.cuts}
                            </View>
                        </Text>
                        <View
                            style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                        >
                            <Button
                                title="TUTORIAL"
                                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=AhANvBB9hz0')}
                                color="#45ada8"
                            >
                            </Button>
                            <Button
                                title="HIDE"
                                onPress={this.handleCutsHide}
                                style={styles.button}
                                color="#45ada8"
                            >
                            </Button>
                        </View>
                    </View>
                }
                {this.state.showStingsProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.stings}
                             </View>
                             <View>
                             {this.state.procedures.stings}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=qU6yRepWPmo')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleStingsHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }

                {this.state.showSunburnsProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.sunburns}
                             </View>
                             <View>
                             {this.state.procedures.sunburns}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZeIN4ESgzu8')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleSunburnsHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }

                {this.state.showSplintersProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.splinters}
                             </View>
                             <View>
                             {this.state.procedures.splinters}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MKZf8hoqWFE')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleSplintersHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }
                {this.state.showBurnsProcedure &&
                     <View
                         style={styles.card}
                     >
                         <Text>
                             <View
                                 style={{backgroundColor: '#547980'}}
                             >
                             {this.state.injuries.burns}
                             </View>
                             <View>
                             {this.state.procedures.burns}
                             </View>
                         </Text>
                         <View
                             style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
                         >
                             <Button
                                 title="TUTORIAL"
                                 onPress={() => Linking.openURL('https://www.youtube.com/watch?v=XGnLkUty69g')}
                                 color="#45ada8"
                             >
                             </Button>
                             <Button
                                 title="HIDE"
                                 onPress={this.handleBurnsHide}
                                 style={styles.button}
                                 color="#45ada8"
                             >
                             </Button>
                         </View>
                     </View>
                 }
                 <Button
                    style={{width: '30vw', height: '7vh'}}
                    title="LOG OUT"
                    onPress={this.handleLogout}
                    color="black"
                >
                </Button>
            </ScrollView>
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
            height: '10vh',
        },
        register:{
            width: '20vw',
            height: '10vh'
        }
    },
    menu: {
        width: '50vw',
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
            borderRadius: '10vw'
        },
        bruises: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
        },
        sting: {
            width: '40vw',
            height: '20vh',
            borderRadius: '10vw'
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
        height: '49vh',
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
        width: '50vw',
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
