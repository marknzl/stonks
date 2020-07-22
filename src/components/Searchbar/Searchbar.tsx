import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, makeStyles, Theme, createStyles, StylesProvider } from '@material-ui/core';
import ISearchbarProps from '../../shared/ISearchbarProps';
import './SearchBar.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            height: 50
        },

        button: {
            height: 50
        }
    }),
);

function Searchbar(props: ISearchbarProps) {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const classes = useStyles();
    
    // useEffect(() => {
    //     props.setSearchQueryInput({searchQuery: searchQuery});
    // }, [searchQuery]);

    const handleSubmit = () => {
        props.setSearchQueryInput({searchQuery: searchQuery});
    }

    return (
        <div className="SearchBarContainer">
            <Grid container spacing={5}>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <TextField
                            required
                            label="Enter stock symbol"
                            variant="outlined"
                            onChange={e => setSearchQuery(e.target.value)}
                            fullWidth
                            InputProps={{
                                className: classes.input
                            }}
                    ></TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.button} variant="outlined" color="primary" onClick={handleSubmit}>Search</Button>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Searchbar;