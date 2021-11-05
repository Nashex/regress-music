import { Box } from '@mui/system';
import React from 'react'
import { Radar } from 'react-chartjs-2';

export default function FeatureGraph(props) {
    const { features } = props

    const percentFeatures = ['acousticness', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence']
    const labels = Object.keys(features).filter(key => percentFeatures.includes(key))
    const values = Object.keys(features).filter(key => percentFeatures.includes(key))
        .map(o => features[o]);

    const data = {
        labels,
        plugins: {
            legend: {
                display: false
            }
        },
        datasets: [
            {
                label: 'Audio Features',
                backgroundColor: 'rgba(163, 23, 107, 0.2)',
                borderColor: 'rgb(163, 23, 107)',
                pointBackgroundColor: 'rgb(163, 23, 107)',
                data: values
            }
        ],
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    return (
        <Box>
            <Radar data={data} options={options} />
        </Box>
    )
}
