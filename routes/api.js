const express = require('express');
const router = express.Router();
const Axios = require('axios');

require('dotenv').config();

router.put('/api/listing',function (req,res) {
      const {city,state} = req.body;
      Axios({
        method: 'get', 
        url: `https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=${city}&offset=0&limit=20&state_code=${state}`,
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REAL_ESTATE_KEY,
        }
      }).then(result=> { 
       res.send({listings: result.data.listings})
      });
  
});

router.put('/api/details', function(req,res){
  const {listId, propertyId} = req.body;
  Axios({
    method: 'get', 
    url: `https://realtor.p.rapidapi.com/properties/detail?listing_id=${listId}&prop_status=for_sale&property_id=${propertyId}`,
  
    headers: {
      "x-rapidapi-host": "realtor.p.rapidapi.com",
      "x-rapidapi-key": process.env.REAL_ESTATE_KEY,
    }
  }).then(result=> { 
    res.send({dataDetail:result.data});
   });
});

router.get('/listing', function (req,res) { 
      const {} = req.body;
});
// 


module.exports = router; 