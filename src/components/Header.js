import React from 'react'
import { AppBar, Box } from '@mui/material';

const styles = {
    thumbnail: {
        height: 60,
        mx: 'auto',
        my: 1,
        cursor: 'pointer'
    }
}

export default function Header() {
    return (
        <AppBar position="relative" justifyContent="center" sx={{ background: 'black' }}>
            <Box
                component="img"
                src="./../../beatsLogo.png"
                sx={styles.thumbnail}
            />
        </AppBar>
    )
}
