exports.createPages = ({actions: {createPage}}) => {
    const artists = [
        {
            path: 'saribble',
            id: 'dFSzAYPMYMHQITGbF3JgR'
        },
        {
            path: 'rebecca',
            id: '65M8H7MimDTxfhahPlR4WM'
        },
        {
            path: 'luxpacifica',
            id: '4XFyKN52mNocgNxmeP3CBi'
        },
        {
            path: 'mars',
            id: '5li3Di1kkWCDMW6mAeb2mM'
        }
    ]
    artists.forEach(artist => {
        createPage({
            path: `/${artist.path}`,
            component: require.resolve('./src/templates/about.js'),
            context: {id: artist.id}
        })
        createPage({
            path: `/${artist.path}/blog`,
            component: require.resolve('./src/templates/blog.js'),
            context: {id: artist.id}
        })
    })
}