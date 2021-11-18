import React from 'react'
import { AppBar, Box } from '@mui/material';
import { useHistory } from 'react-router';

const styles = {
    thumbnail: {
        height: 60,
        mx: 'auto',
        my: 1,
        cursor: 'pointer'
    },
    bar: {
        background: 'black',
        justifyContent: 'center',
    }
}

export default function Header() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <AppBar position="relative" sx={styles.bar}>
            <Box
                component="img"
                src="./../../logo512.png"
                sx={styles.thumbnail}
                onClick={handleClick}
            />
        </AppBar>
    )
}
