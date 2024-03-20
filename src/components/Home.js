import * as React from 'react';
import Nav from './navbar/nav';
import Hero from './heroPage/hero';
import Landing from './landingPage/landing';
import Bento from './Bento/Bento';
function Home() {
    return (
        <div>
          <Nav></Nav>  
          <Hero></Hero>
          <Landing></Landing>
          <Bento></Bento>
        </div>
    )
}

export default Home