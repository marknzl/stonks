import React, { useState, useEffect } from 'react';
import IUserInput from '../../shared/IUserInput';
import { GridList, GridListTile, ListSubheader, GridListTileBar } from '@material-ui/core';
import IArticle from '../../shared/IArticle';
import './NewsFeed.css';

function NewsFeed(props: IUserInput) {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [articles, setArticles] = useState<IArticle[]>();

    useEffect(() => {
        setSearchQuery(props.searchQuery);
        fetch(`https://newsapi.org/v2/everything?q=$${props.searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                let resObjArray: IArticle[] = [];

                for (let i = 0; i < 6; i++) {
                    if (typeof(response["articles"][i]) !== "undefined") {
                        let resObj = {
                            title: response["articles"][i]["title"],
                            url: response["articles"][i]["url"],
                            imageUrl: response["articles"][i]["urlToImage"]
                        };
    
                        resObjArray.push(resObj);
                    }
                }

                setArticles(resObjArray);
                console.log(articles);
            });
    }, [props.searchQuery]);

    if (searchQuery !== "" && articles != null) {
        return (
            <div>
                <h2>News:</h2>
                <GridList>
                    <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                        <ListSubheader component="div">Feed for {searchQuery}</ListSubheader>
                    </GridListTile>
                    {articles.map((tile) => (
                        <GridListTile key={tile.imageUrl}>
                            <a href={tile.url} target="_blank">
                                <img src={tile.imageUrl}></img>
                            </a>
                            <GridListTileBar
                                title={<a href={tile.url} target="_blank">{tile.title}</a>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default NewsFeed;