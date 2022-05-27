const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        // dataSources is child object of context. context.dataSources. 
        // {dataSources} destructures context(third parameter of resolver) to access dataSources
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.tracksAPI.getTracksForHome();
         },

        // get a single track by ID, for the track page
        // id is child object of args. args.id
        // {id} destructures args(second parameter of resolver) to access arguments passed to query
         track: (_, {id}, {dataSources}) => {
             return dataSources.tracksAPI.getTrack({id})
         }
    },
    Track: {
        // get author data for every track by calling tracks-api and using the authorId present in the data returned by Track.author's parent Query.tracksForHome
        // authorId is child property of parent. parent.authorId. 
        // {authorId} destructures parent(first parameter of resolver) to access authorId
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.tracksAPI.getAuthor(authorId);
        },

        //get all modules for a single track by calling tracks-api and using the id present in the data returned by Track.modules parent Query.track
        modules: ({id}, _, {dataSources}) => {
            return dataSources.tracksAPI.getTrackModules(id);
        }
    }
};

module.exports = resolvers;