const axios = require("axios");














async function find(req, res){
    const options = {
        method: 'GET',
        //search by muscle groups
        // url: 'https://wger.de/api/v2/muscle/?name_en=Quad',
        url: 'https://wger.de/api/v2/exercise/?muscles=5&language=2',
        // url: 'https://wger.de/api/v2/exerciseimage/?id=3',
        // url: 'https://wger.de/api/v2/exerciseimage/?is_main=True',
        headers: {
          'Authorization': 'Token ac8d20dd5cdd6ed1a412fb06269185a7ef2f65e7',
        },
      };
    try {
        axios.request(options).then(function (response) {
            console.log(response.data)
            res.status(200).json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
      } catch (err) {
        return res.status(401).json(err);
      }

}







module.exports = {
    find,
  };
  