module.exports = {
    plugins: {
        "postcss-cssnext": {},
        "cssnano": {
            preset: 'default'
        },
        autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] }
    }
}