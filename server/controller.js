const Kladr = require('./plugin')
const kladr = new Kladr();
const path = require('path');


class CityController {

    get(req, res) {
        const { name } = req.params;
        kladr.getData({ query: name, contentType: 'city', withParent: 0, limit: 10 }, (err, result) => {
            return res.json(result);
        });
    }

}

module.exports = new CityController();