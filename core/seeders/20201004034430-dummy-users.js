'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      let guy1_first_name  = 'Sahil';
      let guy2_first_name = 'Sarpal';
      let guy3_first_name = 'Sahil2';
      let guy4_first_name = 'Sarpal3';

      await queryInterface.bulkInsert('Users', [
        {
          firstName: guy1_first_name,
          lastName: 'Sarpal',
          avatar: 'https://scontent.fbom12-1.fna.fbcdn.net/v/t1.0-9/58462653_2099167076798842_3669796477779050496_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=oezPasSzw8EAX-gY3-J&_nc_ht=scontent.fbom12-1.fna&oh=7e72159878bcc2f4bdeadf0fc3283d1f&oe=5F9ECD1E',
          created_at: new Date(),
          updated_at: new Date()
      },
        {
          firstName: guy2_first_name,
          lastName: 'Sahil',
          avatar: 'https://avatars2.githubusercontent.com/u/44086298?v=4',
          created_at: new Date(),
          updated_at: new Date()
      },
        {
          firstName: guy3_first_name,
          lastName: 'Sahil',
          avatar: 'https://avatars0.githubusercontent.com/u/2608102?v=4',
          created_at: new Date(),
          updated_at: new Date()
      },
        {
          firstName: guy4_first_name,
          lastName: 'Sarpal',
          avatar: 'https://avatars3.githubusercontent.com/u/13375245?v=4',
          created_at: new Date(),
          updated_at: new Date()
      },
    
    ]);
    console.log("sas");

    const firstGuy = await queryInterface.sequelize.query(
      `SELECT id from "Users" where "firstName"='${guy1_first_name}' LIMIT 1;`
    );

    const secondGuy = await queryInterface.sequelize.query(
      `SELECT id from "Users" where "firstName"='${guy2_first_name}' LIMIT 1;`
    );
    const thirdGuy = await queryInterface.sequelize.query(
      `SELECT id from "Users" where "firstName"='${guy3_first_name}' LIMIT 1;`
    );
    const fourthGuy = await queryInterface.sequelize.query(
      `SELECT id from "Users" where "firstName"='${guy4_first_name}' LIMIT 1;`
    );

    return await queryInterface.bulkInsert('FriendRelations', [
      {user_id: firstGuy[0][0].id, friend_id: secondGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
      {user_id: firstGuy[0][0].id, friend_id: fourthGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
      {user_id: secondGuy[0][0].id, friend_id: thirdGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
      {user_id: secondGuy[0][0].id, friend_id: firstGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
      {user_id: thirdGuy[0][0].id, friend_id: secondGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
      {user_id: fourthGuy[0][0].id, friend_id: firstGuy[0][0].id, relation: 'friend', created_at: new Date(), updated_at: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});   
    return await queryInterface.bulkDelete('FriendRelations', null, {});   
  }
};
