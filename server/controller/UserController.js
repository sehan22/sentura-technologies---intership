const multer = require('multer');
const upload = multer();

const UserController = {
    saveUser: async function (req, res, next) {
        try {
            const userData = req.body;

            if (req.file) {
                userData.profileImgUrl = req.file.buffer.toString('base64');
            }
            res.status(200).json(res.body);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },
}

module.exports = UserController;
