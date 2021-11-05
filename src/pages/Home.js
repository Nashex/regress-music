import React from 'react'
import { Container, TextField, Typography, Paper, Box } from '@mui/material';
import { useHistory } from 'react-router';

const styles = {
    welcome: {
        p: 2,
        my: 2
    }
}

export default function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/search')
    }

    return (
        <Container >
            <Box my={2} elevation={5}>
                <Paper my={1} elevation={2}>
                    <TextField
                        fullWidth
                        placeholder="Search Songs by Title or Artist"
                        onClick={handleClick}
                    />
                </Paper>
                <Paper elevation={2} sx={styles.welcome}>
                    <Typography variant="h6">
                        Welcome to Regress it
                    </Typography>
                    <Typography variant="body1">
                        To look at a song's audio features just type a query into the search bar!
                    </Typography>
                </Paper>
            </Box>
        </Container>
    )
}
