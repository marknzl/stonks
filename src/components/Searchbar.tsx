import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import ISearchbarProps from '../shared/ISearchbarProps';

function Searchbar(props: ISearchbarProps) {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    
    useEffect(() => {
        props.setSearchQueryInput({searchQuery: searchQuery});
    }, [searchQuery]);

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <TextField
                            required
                            label="Enter stock ticker"
                            variant="outlined"
                            onClick={() => setHasFocus(true)}
                            onChange={e => setSearchQuery(e.target.value)}
                            fullWidth
                    ></TextField>
                </Grid>
                <Grid item xs={4}>
                    {/* <Button variant="outlined" color="primary">Search</Button> */}
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Searchbar;