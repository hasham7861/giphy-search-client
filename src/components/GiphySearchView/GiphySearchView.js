import React, {useContext, useState} from 'react'
import {
    Grid,
    SearchBar,
    SearchContext,
    SuggestionBar,
} from '@giphy/react-components'
import ResizeObserver from "react-resize-observer";

const GiphySearchView = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    const [width, setWidth] = useState(window.innerWidth);
    return (
        <>
            <SearchBar/>
            <SuggestionBar />
            {/** 
                key will recreate the fetchGifs function and the component will be refreshed efficiently
            **/}
            <Grid key={searchKey} columns={3} width={width} gutter={6} fetchGifs={fetchGifs} />
            <ResizeObserver onResize={({ width }) => {setWidth(width);}}/>
        </>
    )
}

export default GiphySearchView