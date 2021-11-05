import React from 'react'
import { Box, Typography } from '@mui/material';


export default function Footer() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 5, alignItems: 'center' }}>
            <Box
                sx={{ height: '30px', m: 1 }}
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
            />
            <Typography variant="overline">
                Powered by the Spotify API
            </Typography>
        </Box>
    )
}
