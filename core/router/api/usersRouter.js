const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');

/**
   * @swagger
   * definitions:
   *   users:
   *     required:
   *       - id
   *       - firstName
   *       - lastName
   *       - avatar
   *     properties:
   *       id:
   *         type: integer
   *       firstName:
   *         type: string
   *       lastName:
   *         type: string
   *       avatar:
   *         type: string
   */


/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     description: Return all user
 *     parameters:
 *      - name: page
 *        description: page number to get
 *        required: false
 *      - name: limit
 *        description: limit for a page
 *        required: false
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a single user object
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/', UsersController.listUsers);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     tags:
 *       - users
 *     description: Return a specific user
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: userId
 *        description: numeric id of the user to get
 *        in: path
 *        required: true
 *        type: integer
 *        minimum: 1
 *     responses:
 *       200:
 *         description: a single user object
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/:id([0-9])', UsersController.getUserById);

/**
 * @swagger
 * /users/{userId}/friends:
 *   get:
 *     tags:
 *       - users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: return the user profile
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/:id([0-9])/friends', UsersController.getFriends);


module.exports = router;
