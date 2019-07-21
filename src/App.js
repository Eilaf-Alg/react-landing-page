import React from 'react';
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';
import JigSaw from './JigSaw';
import { InfoGroup, Info } from './InfoGroup'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron img="img/bg-masthead.jpg"/>
      <InfoGroup>
        <Info 
          iconClass="icon icon-screen-desktop" 
          title="Fully" 
          caption="This theme will look great on any device, no matter the size!"/>
        <Info 
          iconClass="icon icon-layers" 
          title="Bootstrap 4 Ready" 
          caption="Featuring the latest build of the new Bootstrap 4 framework!"/>
        <Info 
          iconClass="icon icon-check" 
          title="Easy to Use" 
          caption="Easy to Use"/>
      </InfoGroup>

      <JigSaw 
        order={2}
        img="img/bg-showcase-1.jpg"
        title="Fully Responsive Design"
        caption="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
      />
      
      <JigSaw 
        order={1}
        img="img/bg-showcase-2.jpg"
        title="Fully Responsive Design"
        caption="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
      />
      
      <JigSaw 
        order={2}
        img="img/bg-showcase-3.jpg"
        title="Easy to Use & Customize"
        caption="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
      />
      

    </div>
  );
}

export default App;
