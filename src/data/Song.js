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

    getDarkTrap() {
        return Math.exp(1.32100273603852 + -3.95214590210851 * this.energy  + -2.97034537066208 * this.instrumentalness  + -3.12192361041902 * this.valence  + 1.20639147140238 * this.speechiness  + 0.802235849492915 * this.acousticness);
    }
    
    getUndergroundRap() {
        return Math.exp(-0.585173750670349 + -3.21130941474024 * this.energy  + -1.62669769007471 * this.instrumentalness  + 2.90358096877526 * this.speechiness);
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
        return Math.exp(-4.45576396152845 + 5.15632014066701 * this.energy  + -23.1743815240074 * this.instrumentalness  + 1.03472830247698 * this.valence  + -16.1475912163601 * this.speechiness  + -2.85920297002705 * this.acousticness  + -1.57620521178576 * this.liveness);
    }

    getRap() {
        return Math.exp(0.425611071259471 + -4.55463094574337 * this.energy  + -23.2407622276349 * this.instrumentalness  + 0.52577585234976 * this.valence  + 2.77803181019107 * this.speechiness  + -0.867364231641159 * this.liveness);
    }

    getRnB() {
        return Math.exp(-1.5495965762436 + -3.01395022374914 * this.energy  + -10.1887307014657 * this.instrumentalness  + 3.78785671267583 * this.valence  + -2.42908899419463 * this.speechiness);
    }

    getTechHouse() {
        return Math.exp(-4.16036242089186 + 3.00360374936557 * this.instrumentalness  + 5.47362749760542 * this.valence  + -5.06768014149018 * this.speechiness  + -10.3415607481371 * this.acousticness  + -4.07605654410669 * this.liveness);
    }

    getTechno() {
        return Math.exp(-3.48721878420174 + -3.07209893439994 * this.energy  + 7.60230695132344 * this.instrumentalness  + -3.19720459743676 * this.valence  + -3.35338737160986 * this.liveness);
    }
  
    getTrance() {
        return Math.exp(-6.02565277205317 + 5.5092102976049 * this.energy  + 0.398243820713682 * this.instrumentalness  + -3.23540933952014 * this.valence  + -6.66479798738772 * this.speechiness  + -7.16880208633747 * this.acousticness  + 1.3819136887026 * this.liveness);
    }
 
    getPsytrance() {
        return Math.exp(-7.03276619111165 + 3.54979310235545 * this.energy  + 3.68956086162267 * this.instrumentalness  + -0.996401368763468 * this.valence  + -8.43646615935913 * this.speechiness  + -8.43363894877473 * this.acousticness  + 2.44922578253309 * this.liveness);
    }

    getTrap() {
        return Math.exp(-9.0616123518072 + 7.97565037565315 * this.energy  + -1.23533136148129 * this.instrumentalness  + -1.68520823994977 * this.valence  + 4.78247249957852 * this.speechiness  + -6.23684794508448 * this.acousticness);
    }

    getDnb() {
        return Math.exp(-5.32252007714 + 4.98482632982042 * this.energy  + -2.48156486211751 * this.valence  + -3.18195513151536 * this.speechiness  + -2.78047899379251 * this.acousticness  + -1.60527119347946 * this.liveness);
    }

    getHardstyle() {
        return Math.exp(-7.15551186571953 + 7.87972234598448 * this.energy  + -3.09271030470342 * this.instrumentalness  + -3.13671743189077 * this.valence  + -6.12840421635238 * this.speechiness  + 0.764990649322906 * this.liveness);
    }

    getPop() {
        return Math.exp(-1.13964320234083 + -2.1089992753292 * this.energy  + -5.18847516028756 * this.instrumentalness  + 3.00667818304564 * this.valence  + -9.16225092030095 * this.speechiness  + 1.01153378741204 * this.acousticness);
    }

    getHipHop() {
        return Math.exp(-3.78725272271513 + -1.84674850993401 * this.energy  + -4.24051156705892 * this.instrumentalness  + 3.35624266579344 * this.valence  + 3.64710763208459 * this.speechiness  + 1.97158195059129 * this.acousticness  + 1.05433091224113 * this.liveness);
    }

    getResult(intercept, b1, b2, b3, b4, b5) {
        //console.log(this.liveness, this.energy, this.valence, this.acousticness);
        let val = Math.exp(intercept + 
            b1 * this.energy + 
            b2 * this.speechiness + 
            b3 * this.acousticness + 
            b4 * this.instrumentalness + 
            b5 * this.valence
            );
        val = val >= 1 ? 0 : val;
        return val;
    }
}