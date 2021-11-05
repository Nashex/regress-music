import React from 'react'
import { Box, Typography } from '@mui/material';

const SPOTIFY_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png";

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'center',
        my: 5,
        alignItems: 'center',
    },
    icon: {
        height: 30,
        m: 1,
    }
}

export default function Footer() {
    return (
        <Box sx={styles.box}>
            <Box
                sx={styles.icon}
                component="img"
                src={SPOTIFY_URL}
            />
            <Typography variant="overline">
                Powered by the Spotify API
            </Typography>
        </Box>
    )
}
