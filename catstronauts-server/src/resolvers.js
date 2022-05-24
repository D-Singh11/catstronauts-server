const resolvers = {
    QUERY: {
        // get all tracks, will be used to populate the homepage grid of our web client
        // dataSources is child object of context. context.dataSources. 
        // {dataSources} destructures context(third parameter of resolver) to access dataSources
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.tracksAPI.getTracksForHome();
         },
    }
};

module.exports = resolvers;