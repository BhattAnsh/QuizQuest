import * as React from 'react';
import Nav from './navbar/nav';
import Hero from './heroPage/hero';
import Landing from './landingPage/landing';
function Home() {
    return (
        <div>
          <Nav></Nav>  
          <Hero></Hero>
          <Landing></Landing>
        </div>
    )
}

export default Home