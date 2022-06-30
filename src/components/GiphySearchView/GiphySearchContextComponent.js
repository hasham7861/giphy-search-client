import React from 'react'
import {
    SearchContextManager,
} from '@giphy/react-components'
import CONFIG from '../../config/config'
import GiphySearchView from './GiphySearchView';

const searchOptions = {
    rating: 'g',
    lang: 'en'
}

const GiphySearchContextComponent = () => (
    /**
     *  Anything within the context manager will share search term, 
     *      and search update trigger to update view component
     */ 
    <SearchContextManager apiKey={CONFIG.giphyApiKey} options={searchOptions}>
        <GiphySearchView />
    </SearchContextManager>
)
export default GiphySearchContextComponent