import { MusicNote } from '@mui/icons-material';
import { Paper, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'

const styles = {
    item: {
        m: .5,
        p: 1
    }
}

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
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignContent: 'center', flexWrap: "wrap", width: '80%', py: 1, mx: 'auto', textAlign: 'center' }} >
                {
                    Object.keys(features).filter(key => percentFeatures.includes(key)).map(key => {
                        const value = features[key]
                        return (
                            //<Chip label={`${key}: ${(value).toFixed(2)}`} sx={{ margin: .5 }} color="primary" variant="outlined" icon={<MusicNote />} />
                            <Paper sx={styles.item} key={key} variant="outlined">
                                <Typography>
                                    <span style={{fontWeight: 'bold'}}>{(key || "").charAt(0).toUpperCase() + (key || "").slice(1)}</span> {value.toFixed(2)}
                                </Typography>
                            </Paper>

                        )
                    })
                }
            </Box>
        </div>
    )
}
