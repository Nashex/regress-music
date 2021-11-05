import React, { useState } from 'react'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { style } from '@mui/system';
import { Pause } from '@mui/icons-material';

const styles = {
    button: {
        height: 80,
        width: 80,
        color: 'rgba(255,255,255,.9)'
    }
}

export default function Preview(props) {
    const { audio } = props;
    const [play, setPlay] = useState(false);

    const togglePlay = () => {
        if (play) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlay(!play);
      }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 151, height: 151, background: 'rgba(0,0,0,.3)' }}>
            <IconButton aria-label="play/pause" onClick={togglePlay}>
                {
                    !play ?
                    <PlayArrowIcon sx={styles.button} />
                    :
                    <Pause sx={styles.button} />
                }
            </IconButton>
        </Box>

    )
}