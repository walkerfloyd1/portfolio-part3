import React, { Component } from 'react';

import { List, ListItem } from '../list';

class Articles extends Component {
    render () {
        return (
            <div className="container" style={{
                backgroundColor: "#D8CBCB",
                position: "fixed",
                top: '10%',
                left: '57%',
                paddingBottom: '2px',
                alignContent: 'center',
                textAlign: 'center'
            }}>
            <h1>Articles</h1>
                <List>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/waves-the-consequences-of-wrong-decisions-1b6896c14ca2">
                                Waves -- The Consequences of Decisions
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/the-lodge-how-not-to-use-a-twist-2843a5cd5020">
                                The Lodge -- How Not To Use A Twist
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/uncut-gems-my-gems-are-cut-addb68056b01">
                                Uncut Gems -- My Gems Are Cut
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/i-lost-my-body-emotion-and-animation-5ac50fea932c">
                                I Lost  My Body -- Emotion and Animation
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/assassination-nation-an-underrated-gem-ae1a0608776e">
                                Assassination Nation -- An Underrated Gem
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/midsommar-the-horror-of-light-adb11822be46">
                                Midsommar -- The Horror of Light
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/the-farewell-the-perfect-structure-3f0da6dc71a4">
                                The Farewell -- The Perfect Structure
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/kingdom-of-heaven-directors-cut-ridley-scott-at-his-best-7c4aa700329c">
                                Kingdom of Heaven: Director's Cut -- Ridley Scott At His Best
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="https://medium.com/@walkerfloyd/joker-delusions-of-grandeur-81e31f157cfe">
                                Joker -- Delusions of Grandeur
                            </a>
                        </ListItem>
                </List>
            </div>
        )
    }
}

export default Articles;