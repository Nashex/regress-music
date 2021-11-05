import { MusicNote } from '@mui/icons-material';
import { Paper, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'

const styles = {
    item: {
        m: .5,
        p: 1
    },
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignContent: 'center',
        flexWrap: "wrap",
        width: '80%',
        py: 1,
        mx: 'auto',
        textAlign: 'center',
    },
    field: {
        fontWeight: 'bold',
    }
}

export default function Features(props) {
    const [features, setFeatures] = useState(props.features || {})
    console.log(features);

    const percentFeatures = ['acousticness', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence']
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
        <Box sx={styles.box} >
            {
                Object.keys(features).filter(key => percentFeatures.includes(key)).map(key => {
                    const value = features[key]
                    return (
                        <Paper sx={styles.item} key={key} variant="outlined">
                            <Typography>
                                <span style={styles.field}>{(key || "").charAt(0).toUpperCase() + (key || "").slice(1)}</span> {value.toFixed(2)}
                            </Typography>
                        </Paper>
                    )
                })
            }
        </Box>
    )
}
