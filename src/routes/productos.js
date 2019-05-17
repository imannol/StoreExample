
const router = require('express-promise-router')();


const {
    index,
    newProducto,
    getProducto,
    replaceProducto,
    deleteProducto

} = require('../controllers/product');

router.get('/', index);
router.post('/',newProducto);
router.get('/:productId', getProducto);
router.put('/:productId', replaceProducto);
router.delete('/:productId', deleteProducto);

module.exports = router;