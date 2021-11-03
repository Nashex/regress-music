import { CardMedia, Card, Paper, CardContent, Typography, Box, Modal, LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import Features from './Features';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 12,
    p: 4,
    borderRadius: 1,
};

export default function Track(props) {
    const { track } = props;
    console.log(track);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <Typography component="div" variant="h6">
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
                <Box sx={style}>
                    <Paper sx={{ display: "flex", my: 1, maxWidth: '600px', mx: 'auto' }} elevation={4}>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 151, height: 151, background: 'rgba(0,0,0,.3)'}}>
                            <IconButton aria-label="play/pause" >
                                <PlayArrowIcon sx={{ height: 80, width: 80, color: 'rgba(255,255,255,.9)'}}/>
                            </IconButton>
                        </Box>
                        <Box
                            sx={{ width: 151, borderRadius: 1 }}
                            component="img"
                            src={track.album.images[0].url}
                        />
                        <Box sx={{ margin: 1 }}>
                            <Typography component="div" variant="h6" sx={{fontWeight: 'bold'}}>
                                {track.name}
                            </Typography>
                            <Typography component="div" variant="subtitle1">
                                {track.artists[0].name}
                            </Typography>
                            
                        </Box>
                    </Paper>
                    <Features features={track.audio_features} />
                </Box>
            </Modal>
        </div>
    )
}
