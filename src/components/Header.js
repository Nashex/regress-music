import React from 'react'
import { AppBar, Box } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="relative" justifyContent="center" sx={{ background: 'black' }}>
            <Box
                component="img"
                src="./../../beatsLogo.png"
                sx={{ height: 60, mx: 'auto', my: 1, cursor: 'pointer' }}
            />
        </AppBar>
    )
}
