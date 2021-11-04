import { VpnKey, VpnKeyOutlined } from '@mui/icons-material';
import { Grid, Stack, Item, Paper, Typography } from '@mui/material';
import { Box, style } from '@mui/system';
import React from 'react'

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

    const otherFeatures = ['key', 'loudness', 'mode', 'tempo', 'time_signature']

    const keys = ['C', 'C♯', 'D', 'D♯, E♭', 'E', 'F', 'F♯, G♭', 'G', 'G♯, A♭', 'A', 'A♯, B♭', 'B']

    return (
        <Grid container justifyContent="center" my={1}>
            <Box direction="row" spacing={2} sx={styles.stack} justifyContent="center">
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={{fontWeight: 'bold'}}>Key:</span> {keys[attributes.key]}
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={{fontWeight: 'bold'}}>Loudness:</span> {attributes.loudness} DB
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={{fontWeight: 'bold'}}>Mode:</span> {attributes.mode ? 'Major' : 'Minor'}
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={{fontWeight: 'bold'}}>Tempo:</span> {attributes.tempo.toFixed(2)} BPM
                    </Typography>
                </Paper>
                <Paper sx={styles.item} variant="outlined">
                    <Typography>
                        <span style={{fontWeight: 'bold'}}>Time Signature:</span> {attributes.time_signature}
                    </Typography>
                </Paper>
            </Box>
        </Grid>
    )
}
