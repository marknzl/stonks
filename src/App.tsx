import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Graph from './components/Graph/Graph';
import StockInfo from './components/CompanyProfile/CompanyProfile';
import { Grid, makeStyles, createStyles, Theme, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import IUserInput from './shared/IUserInput';
import NewsFeed from './components/NewsFeed/NewsFeed';
require('dotenv').config();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: theme.spacing(2)
    }
  }),
);

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const classes = useStyles();
  
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Searchbar setSearchQueryInput={(i: IUserInput) => setSearchQuery(i.searchQuery)}/>
        <Grid container spacing={5}>
          <Grid item xs={4} className={classes.item}>
            <Graph searchQuery={searchQuery}/>
          </Grid>
          <Grid item xs={4} className={classes.item}>
            <StockInfo searchQuery={searchQuery}/>
          </Grid>
          <Grid item xs={4} className={classes.item}>
            <NewsFeed searchQuery={searchQuery}/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
      
    </div>
  );
}

export default App;
