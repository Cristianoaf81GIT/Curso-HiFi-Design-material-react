import React, { useState } from 'react';
import {Header} from './ui/header';
import  Footer  from './ui/footer';
import Services from './Services';
import LandingPage from '../components/LandingPage';
import CustomSoftware from './CustomSoftware';
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header 
        value={value} 
        setValue={setValue} 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex}
      />
      <Switch>
        <Route exact path="/" render={
          (props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        }/>
        
        <Route 
          exact 
          path="/services" 
          render={
            (props) => <Services 
                          {...props} 
                          setValue={setValue} 
                          setSelectedIndex={setSelectedIndex} />
         }
        />

        <Route 
            exact 
            path="/customsoftware" 
            render={
              (props) => <CustomSoftware 
                            {...props} 
                            setValue={setValue} 
                            setSelectedIndex={setSelectedIndex} />
            }
        />

        <Route exact path="/mobileapps" component={() => <div>Mobile apps</div>}/>
        <Route exact path="/websites" component={() => <div>Websites</div>}/>
        <Route exact path="/revolution" component={() => <div>Revolution</div>}/>
        <Route exact path="/about" component={() => <div>About</div>}/>
        <Route exact path="/contact" component={() => <div>Contact</div>}/>
        <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
      </Switch>
      <Footer
        value={value} 
        setValue={setValue} 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex}
      />
      </BrowserRouter>     
    </ThemeProvider>
  );
}

export default App;
