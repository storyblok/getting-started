module.exports = {
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-storyblok',
            options: {
                accessToken: 'd6IKUtAUDiKyAhpJtrLFcwtt',
                version: 'draft',
            }
        }
    ]
}