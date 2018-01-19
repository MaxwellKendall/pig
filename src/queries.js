import firestore from './rebase';

/* eslint-disable import/prefer-default-export */
export const getData = (collection, conditions) => {
  const collectionName = collection;
  const whereCondition = conditions;
  const collectionName = firestore.db.collection('Collection');
    firestore.rebase.get(users, {
      context: this,
      query: users => users.where('displayName', '==', 'Megan Kendall'),
    }).then((data) => {
      console.log('megan? ', data);
    }).catch((err) => {
      console.log('there was an error: ', err);
    });
};