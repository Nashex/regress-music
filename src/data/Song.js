export default class Song {
    constructor(track) {
        this.track = track;
        this.audioFeatures = track.audio_features;

        // Variables use in the linear model 
        this.energy = this.audioFeatures.energy;
        this.speechiness = this.audioFeatures.speechiness;
        this.acousticness = this.audioFeatures.acousticness;
        this.instrumentalness = this.audioFeatures.instrumentalness;
        this.valence = this.audioFeatures.valence;
        this.liveness = this.audioFeatures.liveness;
        
        this.tempo = this.audioFeatures.tempo;
        this.timeSignature = this.audioFeatures.time_signature;


    }
    
    getUndergroundRap() {
        return this.getResult(
            -0.5246,
            -3.4369,
            -1.5796,
            0.3625,
            2.8960,
            -0.5056
        )
    }

    getTrapMetal() {
        return this.getResult(
            -26.57,
            0,
            0,
            0,
            0,
            0,
            0
        )
    }

    getEmo() {
        return this.getResult(
            -4.4942,
            4.7351,
            -22.6810,
            1.1804,
            -16.3683,
            -2.8841
        )
    }

    getRap() {
        return this.getResult(
            0.5778,
            -4.9464,
            -23.2264,
            0.6007,
            2.7056,
            -0.5847,
        )
    }

    getRnB() {
        return this.getResult(
            -1.3335,
            -3.2473,
            -10.2992,
            3.8159,
            -2.4231,
            -0.5451
        )
    }

    getTechHouse() {
        return this.getResult(
            -4.2030,
            -1.6726,
            3.0743,
            5.6098,
            -5.4623,
            -10.2699
        )
    }

    getTechno() {
        return this.getResult(
            -3.4271,
            -3.8642,
            7.7158,
            -3.0622,
            -1.4644,
            -0.3909
        )
    }
  
    getTrance() {
        return this.getResult(
            -6.1217,
            6.0564,
            0.3212,
            -3.2517,
            -6.5198,
            -7.6091
        )
    }
 
    getPsytrance() {
        return this.getResult(
            -7.0915,
            4.5514,
            3.4303,
            -1.0730,
            -8.5854,
            -9.8933
        )
    }

    getTrap() {
        return this.getResult(
            -9.0616,
            7.9757,
            -1.2353,
            -1.6852,
            4.7825,
            -6.2368
        )
    }

    getDnb() {
        return this.getResult(
            -5.2700,
            4.4720,
            0.3349,
            -2.4015,
            -3.3308,
            -2.6540
        )
    }

    getHardstyle() {
        return this.getResult(
            -7.18348,
            8.14339,
            -3.11819,
            -3.18470,
            -5.99970,
            0.09608
        )
    }

    getPop() {
        return this.getResult(
            -1.1396,
            -2.1090,
            -5.1885,
            3.0067,
            -9.1623,
            1.0115
        )
    }

    getHipHop() {
        return this.getResult(
            -3.7166,
            -1.5946,
            -4.2600,
            3.2731,
            3.7643,
            1.9619
        )
    }

    getDarkTrap() {
        return this.getResult(
            1.3210,
            -3.9521,
            -2.9703,
            -3.1219,
            1.2064,
            0.8022
        )
    }

    getResult(intercept, b1, b2, b3, b4, b5) {
        //console.log(this.liveness, this.energy, this.valence, this.acousticness);
        return Math.exp(intercept + 
            b1 * this.energy + 
            b2 * this.speechiness + 
            b3 * this.acousticness + 
            b4 * this.instrumentalness + 
            b5 * this.valence
            );
    }
}