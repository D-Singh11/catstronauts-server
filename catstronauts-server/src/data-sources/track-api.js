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
}