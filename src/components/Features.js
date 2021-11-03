import { MusicNote } from '@mui/icons-material';
import { Chip, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'

export default function Features(props) {
    const [features, setFeatures] = useState(props.features || {})
    console.log(features);

    const percentFeatures = ['acousticness', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence']
    // Features without percentages duration_ms key loudness mode tempo time_signature
    const otherFeatures = ['key', 'loudness', 'mode', 'tempo', 'time_signature']
    useEffect(() => {
        setFeatures(props.features);
        return () => {
            setFeatures({});
        }
    }, [features])

    if (!features) {
        return <></>
    }

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", width: '80%', py: 1, mx: 'auto', textAlign: 'center' }} >
                <Typography variant='h6' sx={{ flex: '0 1 100%', m: 1, fontWeight: 'bold' }}>
                    Calculated Features:
                </Typography>
                {
                    Object.keys(features).filter(key => percentFeatures.includes(key)).map(key => {
                        const value = features[key]
                        return (
                            <Chip label={`${key}: ${(value).toFixed(2)}`} sx={{ margin: .5 }} color="primary" variant="outlined" icon={<MusicNote />} />

                        )
                    })
                }
            </Box>
        </div>
    )
}
