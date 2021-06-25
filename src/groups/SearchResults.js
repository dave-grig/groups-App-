import React from 'react'

import {Group} from './Group'

import { Typography, Paper } from '@material-ui/core'

export const SearchResults = ({searchResult}) => {
    console.log("tttt", searchResult)


    return (
        <div>
            <Typography variant='h6'>Search Results</Typography>
            {!searchResult.length ? "No results" : searchResult.map((result, index) => {
                return <Group key={index} groupData={result} />
            })}
        </div>
    )
}
