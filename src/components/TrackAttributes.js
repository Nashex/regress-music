import React from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material';

const styles = {
    stack: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    labels: {
        fontWeight: 'bold'
    },
    item: {
        m: .5,
        p: 1
    }
}

export default function TrackAttributes(props) {
    const { attributes } = props;

    const keys = ['C', 'C♯', 'D', 'D♯, E♭', 'E', 'F', 'F♯, G♭', 'G', 'G♯, A♭', 'A', 'A♯, B♭', 'B']

    return (
        <Grid container justifyContent="center" my={1}>
            <Box direction="row" spacing={2} sx={styles.stack} justifyContent="center">
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={styles.labels}>Key:</span> {keys[attributes.key]}
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={styles.labels}>Loudness:</span> {attributes.loudness} DB
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={styles.labels}>Mode:</span> {attributes.mode ? 'Major' : 'Minor'}
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={styles.labels}>Tempo:</span> {attributes.tempo.toFixed(2)} BPM
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={styles.labels}>Time Signature:</span> {attributes.time_signature}
                    </Typography>
                </Paper>
            </Box>
        </Grid>
    )
}
