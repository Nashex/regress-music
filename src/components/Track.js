import { CardMedia, Card, Paper, CardContent, Typography, Box, Modal, Grid } from '@mui/material'
import React, { useState } from 'react'
import Features from './Features';
import Preview from './Preview';
import FeatureGraph from './FeatureGraph';
import TrackAttributes from './TrackAttributes';


const style = {
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
};

export default function Track(props) {
    const { track } = props;

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState(track.preview_url);
    const [audio, setAudio] = useState(new Audio(track.preview_url));
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        audio.pause();
        setOpen(false);
    };

    return (
        <div>
            <Card py={10} my={3} elevation={2} onClick={handleOpen}>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={track.album.images[0].url}
                    />
                    <CardContent>
                        <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                            {track.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {track.artists[0].name}
                        </Typography>
                    </CardContent>
                </Box>

            </Card>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} elevation={10}>
                    <Paper sx={{ display: "flex", my: 1, maxWidth: '600px', mx: 'auto' }} elevation={4}>
                        {preview ? <Preview url={track.preview_url} audio={audio} /> : ''}
                        <Box
                            sx={{ width: 151, borderRadius: 1 }}
                            component="img"
                            src={track.album.images[0].url}
                        />
                        <Box sx={{ margin: 1 }}>
                            <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                                {track.name}
                            </Typography>
                            <Typography component="div" variant="subtitle1">
                                {track.artists[0].name}
                            </Typography>

                        </Box>
                    </Paper>
                    <Box justifyContent="center">
                        <Typography variant='h6' sx={{ flex: '0 1 100%', m: 1, fontWeight: 'bold', textAlign: 'center' }}>
                            Track Attributes
                        </Typography>
                        <TrackAttributes attributes={track.audio_features} />
                    </Box>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Typography variant='h6' sx={{ flex: '0 1 100%', m: 1, fontWeight: 'bold', textAlign: 'center' }}>
                            Calculated Features
                        </Typography>
                        <Grid container xs={12} alignItems="center" justifyContent="center">
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
        </div>
    )
}
