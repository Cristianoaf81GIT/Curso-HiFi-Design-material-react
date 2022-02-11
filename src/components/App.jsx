import {Header} from './ui/header';
import  Footer  from './ui/footer'
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={() => <div style={{height: "2000px"}}>Home</div>}/>
        <Route exact path="/services" component={() => <div>Services</div>}/>
        <Route exact path="/customsoftware" component={() => <div>Custom Software</div>}/>
        <Route exact path="/mobileapps" component={() => <div>Mobile apps</div>}/>
        <Route exact path="/websites" component={() => <div>Websites</div>}/>
        <Route exact path="/revolution" component={() => <div>Revolution</div>}/>
        <Route exact path="/about" component={() => <div>About</div>}/>
        <Route exact path="/contact" component={() => <div>Contact</div>}/>
        <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
      </Switch>
      <Footer/>
      </BrowserRouter>     
    </ThemeProvider>
  );
}

export default App;
