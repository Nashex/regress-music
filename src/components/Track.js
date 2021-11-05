import { CardMedia, Card, CardContent, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import TrackModal from './TrackModal';

export default function Track(props) {
    const { track } = props;

    const [open, setOpen] = useState(false);
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
            <TrackModal audio={audio} track={track} open={open} handleClose={handleClose} />
        </div>
    )
}
