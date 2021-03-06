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
             return dataSources.tracksAPI.getTrack(id);
         },
         
         // get a single module by ID, for the module detail page
         module: (_, {id}, {dataSources}) => {
             return dataSources.tracksAPI.getModule(id);
         }
    },

    Mutation: {
        // increments a track's numberOfViews property using trackId passed to it as args
        incrementTrackViews: async (_, {id}, {dataSources}) => {
            try {
                const track = await dataSources.tracksAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                };    
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                };
            }
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
        },

        // get the Track data as first parameter of resolver function and populate the durationInSeconds fiels using track's length from rest api
         // {length} destructures parent(first parameter of resolver which is track data returned by api) to access length
         durationInSeconds: ({length}) => length,
    },

    Module: {
        // get the Module  data as first parameter of resolver function and populate the durationInSeconds fiels using modile's length from rest api
         // {length} destructures parent(first parameter of resolver which is module data returned by api) to access length
         durationInSeconds: ({length}) => length,
    }
};

module.exports = resolvers;