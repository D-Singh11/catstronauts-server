const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        // dataSources is child object of context. context.dataSources. 
        // {dataSources} destructures context(third parameter of resolver) to access dataSources
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.tracksAPI.getTracksForHome();
         },
    },
    Track: {
        // get author data for every track by calling tracks-api and using the authorId present in the data returned by Track.author's parent Query.tracksForHome
        // authorId is child property of context. parent.authorId. 
        // {authorId} destructures parent(first parameter of resolver) to access authorId
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.tracksAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;