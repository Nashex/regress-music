import { Box } from '@mui/system';
import React from 'react'
import { Bar, Radar } from 'react-chartjs-2';
import Song from '../data/Song';

export default function GenreGraph({ track }) {
    const song = new Song(track);

    const values = [
        song.getPop(),
        song.getTechno(),
        song.getHipHop(),
        song.getDarkTrap(),
        song.getUndergroundRap(),
        song.getTrapMetal(),
        song.getEmo(),
        song.getRap(),
        song.getRnB(),
        song.getTechHouse(),
        song.getTrance(),
        song.getPsytrance(),
        song.getTrap(),
        song.getRnB(),
        song.getHardstyle()
    ]

    const labels = [
        "Pop",
        "Techno",
        "HipHop",
        "Dark Trap",
        "Underground Rap",
        "Trap Metal",
        "Emo",
        "Rap",
        "RnB",
        "Tech House",
        "Trance",
        "Psytrance",
        "Trap",
        "Dnb",
        "Hardstyle"
    ]

    console.log('Pop:', track.name, song.getPop());
    console.log('Techno:', track.name, song.getTechno());
    console.log('Hiphop:', track.name, song.getHipHop());
    console.log('Dark Trap:', track.name, song.getDarkTrap());
    console.log('Underground Rap:', track.name, song.getUndergroundRap());
    console.log('Trap Metal:', track.name, song.getTrapMetal());
    console.log('Emo:', track.name, song.getEmo());
    console.log('Rap:', track.name, song.getRap());
    console.log('RnB:', track.name, song.getRnB());
    console.log('Tech House:', track.name, song.getTechHouse());
    console.log('Trance:', track.name, song.getTrance());
    console.log('PsyTrance:', track.name, song.getPsytrance());
    console.log('Trap:', track.name, song.getTrap());
    console.log('Dnb:', track.name, song.getRnB());
    console.log('Hardstyle:', track.name, song.getHardstyle());
    console.log('\n')
    
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
                borderWidth: 2,
                borderRadius: 5,
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
            <Bar data={data} options={options} />
        </Box>
    )
}
