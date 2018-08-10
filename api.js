const fetch = require('node-fetch')

exports.api = (processor) => processor ? 
                            fetch('http://localhost:8000').then(res => processor(res)) :
                            fetch('http://localhost:8000')