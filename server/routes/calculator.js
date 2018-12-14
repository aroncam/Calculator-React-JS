var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:val1/:operator/:val2', function(req, res, next) {
  console.log(req)
  let val1 = parseInt(req.params.val1)
  let operator = req.params.operator
  let val2 = parseInt(req.params.val2)
  let total = 0
    if (operator==='+')
      {
       total=val1+val2
      }
    else if (operator==='-')
      {
        total=val1-val2
      }
    else if (operator==='*')
      {
        total=val1*val2
      }
    else if (operator==='/')
      {
        total=val1/val2
      }
  res.send(total);
});

module.exports = router;
