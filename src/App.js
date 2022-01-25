import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Auth components
import Signin from "./components/Auth/Signin";
import Register from "./components/Auth/Register";

// General components
import Logo from "./components/General/Logo";
import Home from "./components/General/Home";
import Navigation from "./components/General/Navigation";

// SearchApp components
import SearchApp from "./components/SearchApp/SearchApp";

// CSS
import "tachyons";
import "./App.css";
import Particles from "react-tsparticles";

const particlesOptions = {
    fpsLimit: 30,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1080,
            },
            value: 40,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};

class App extends Component {
    constructor() {
        super();

        this.state = {
            signedIn: false,
        };
    }

    signOut = () => {
        this.setState({ signedIn: false });
    };

    signIn = () => {
        this.setState({ signedIn: true });
    };

    signUp = () => {
        this.setState({ signedIn: true });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Particles
                        className="particles"
                        id="tsparticles"
                        options={particlesOptions}
                    />
                    <Navigation
                        onSignOut={this.signOut}
                        signedIn={this.state.signedIn}
                    />
                    <Logo signedIn={this.state.signedIn} />

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/app" element={<SearchApp />} />

                        <Route
                            path="/signin"
                            element={<Signin signIn={this.signIn} />}
                        />

                        <Route
                            path="/register"
                            element={<Register signUp={this.signUp} />}
                        />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
