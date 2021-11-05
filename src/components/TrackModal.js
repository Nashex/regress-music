import React from 'react'
import { Paper, Typography, Box, Modal, Grid, Button } from '@mui/material'

import Features from './Features';
import Preview from './Preview';
import FeatureGraph from './FeatureGraph';
import TrackAttributes from './TrackAttributes';

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '800px',
        bgcolor: 'background.paper',
        boxShadow: 12,
        p: 4,
        borderRadius: 1,
        maxHeight: '80vh',
        overflowY: 'auto',
    },
    close: {
        position: 'absolute',
        left: 10,
        top: 3,
    },
    track: {
        display: "flex",
        my: 1,
        maxWidth: '600px',
        mx: 'auto',
    },
    cover: {
        width: 151,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    header: {
        flex: '0 1 100%',
        m: 1,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};

export default function TrackModal(props) {
    const { track, audio, open, handleClose } = props

    const preview = track.preview_url || "";

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styles.modal} elevation={10}>
                <Button sx={styles.close} onClick={handleClose}>Close</Button>
                <Paper sx={styles.track} elevation={4}>
                    {preview ? <Preview url={track.preview_url} audio={audio} /> : ''}
                    <Box
                        sx={styles.cover}
                        component="img"
                        src={track.album.images[0].url}
                    />
                    <Box m={1}>
                        <Typography component="div" variant="h6" fontWeight="bold">
                            {track.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {track.artists[0].name}
                        </Typography>
                    </Box>
                </Paper>
                <Box justifyContent="center">
                    <Typography variant='h6' sx={styles.header}>
                        Track Attributes
                    </Typography>
                    <TrackAttributes attributes={track.audio_features} />
                </Box>
                <Grid container justifyContent="center">
                    <Typography variant='h6' sx={styles.header}>
                        Calculated Features
                    </Typography>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item md={6} sm={8} xs={12}>
                            <FeatureGraph features={track.audio_features} />
                        </Grid>
                        <Grid item md={6} sm={4} xs={12}>
                            <Features features={track.audio_features} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}
