const { RESTDataSource } = require('apollo-datasource-rest');

class TracksAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com'
    }

    //Get tracks data from rest Api data source
    getTracksForHome(){
        return this.get('tracks');
    }

     //Get author data from rest Api data source
    getAuthor(authorId){
        return this.get(`author/${authorId}`);
    }

    //Get single Track data from rest Api data source using trackId
    getTrack(trackId){
        return this.get(`track/${trackId}`);
    }

    //Get all modules for a single track from rest Api data source using trackId
    getTrackModules(trackId){
        return this.get(`track/${trackId}/modules`);
    }
    //Get all modules for a single track from rest Api data source using trackId
    getModule(moduleId){
        return this.get(`module/${moduleId}`);
    }
}

module.exports = TracksAPI;