import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import Graph from './components/Graph';
import StockInfo from './components/StockInfo';
import { Grid } from '@material-ui/core';
import IUserInput from './shared/IUserInput';
import NewsFeed from './components/NewsFeed';
require('dotenv').config();

function App() {
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Searchbar setSearchQueryInput={(i: IUserInput) => setSearchQuery(i.searchQuery)}/>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Graph searchQuery={searchQuery}/>
        </Grid>
        <Grid item xs={4}>
          <StockInfo searchQuery={searchQuery}/>
        </Grid>
        <Grid item xs={4}>
          <NewsFeed searchQuery={searchQuery}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
