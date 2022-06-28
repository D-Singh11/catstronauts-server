const {gql} = require('apollo-server');

const typeDefs = gql`
#Schema definitions go here

"Query type's fields are entry points to graph's data for read operations"
type Query{
    "Get tracks array for homepage grid"
    tracksForHome:[Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
    "Fetch a specific module, provided a module's ID"
    module(id:ID!): Module!
}

"Mutation type's fields are entry points to graph's data for write operations"
type Mutation {
    "Update the number of views of a Track and returns updated track"
    incrementTrackViews(id:ID!): IncrementTrackViewsResponse!
}

"A custom type to handle response of incrementTrackViews mutation"
type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
}

"A track is a group of Modules that teaches about a specific topic"
type Track{
    id: ID!
    "The track's title"
    title:String!
     "The track's main author"
    author:Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail:String
     "The track's approximate length to complete, in seconds"
    length:Int @deprecated(reason: "Use durationInSeconds")
    "Track's full duration, in seconds"
    durationInSeconds:Int!
     "The number of modules this track contains"
    modulesCount:Int
    "The track's complete description, can be in Markdown format"
    description: String!
    "The number of times a track has been viewed"
    numberOfViews: Int!
    "The track's complete array of Modules"
    modules: [Module!]!
}

"Author of a complete Track or a Module"
type Author{
    id:ID!
     "Author's first and last name"
    name:String!
     "Author's profile picture url"
    photo:String
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module{
    id:ID!
    "The Module's title"
    title:String!
    "The Module's length in seconds"
    length:Int! @deprecated(reason: "Use durationInSeconds")
    "Module's video duration, in seconds"
    durationInSeconds:Int!
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content:String!
    "The module's video url, for video-based modules"
    videoUrl:String!
}

`;
module.exports = typeDefs;
