import React, { Component } from 'react';
// import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'
// css
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Pokemons from './components/pokemonlist';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const IMG_URL = 'https://pokeres.bastionbot.org/images/pokemon/';


function fetchPokemons(offset = 0, limit = 30) {
  const url = `${BASE_URL}?offset=${offset}&limit=${limit}`;
  return new Promise((resolve, reject) => {
    let result = []
    fetch(url).then((response) => response.json()).then(async (pokemons) => {
      for (let pokemon of pokemons.results) {
        let detail = await getPokemon(pokemon);
        result.push({ ...detail, image: `${IMG_URL}${detail.id}.png` });
      };
      console.log('result is ::>> ', result);
      return resolve(result);
    }).catch(err => {
      console.log(err);
      return reject(err);
    });
  })
}


function getPokemon({ url, name }) {
  return new Promise((resolve, reject) => {
    // console.log(`fetching ${name}'s details...`);
    fetch(url).then((response) => response.json()).then((details) => {
      return resolve(details);
    }).catch(err => {
      console.log(err);
      return reject(err);
    });
  })
};



class App extends Component {
  state = { pokemons: [], show: false };

  componentDidMount() {
    fetchPokemons().then((pokemons) => {
      this.setState({ pokemons })
    })
  }

  render() {
    return (
      // <Container>
      //   <Navbar className="bg-light justify-content-between">
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      //       <Button type="submit">Submit</Button>
      //     </Form>
      //   </Navbar>
      <Pokemons pokemons={this.state.pokemons} />
      // </Container>
    );
  }
}

export default App;
