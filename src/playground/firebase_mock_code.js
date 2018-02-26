// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(`Child with snapshot ${snapshot.key} has changed`, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(`Child with key ${snapshot.key} was added.`, snapshot.val);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// });

// setTimeout(() => {
//     database.ref('expenses').push({
//         description:'Food',
//         note:'',
//         amount:599,
//         createdAt:0 
//     })
// }, 5000);

// setTimeout(() => {
//     database.ref('expenses').push({
//         description:'Gas',
//         note:'',
//         amount:2350,
//         createdAt:0 
//     })
// }, 10000);

// setTimeout(() => {
//     database.ref('expenses').push({
//         description:'Toll Booth',
//         note:'',
//         amount:350,
//         createdAt:0 
//     })
// }, 15000);

// const expenses = [
//     {
//         description:'Comb for all my hair',
//         note:'Har, Har',
//         amount:299,
//         createdAt:0
//     },
//     {
//         description:'Trashbags for falling hair',
//         note:null,
//         amount:250,
//         createdAt:0
//     },
//     {
//         description:'Kombucha',
//         note:'Yum',
//         amount:299,
//         createdAt:0
//     }
// ];

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses =  [];
//     snapshot.forEach((childsnapshot) => {
//         expenses.push({
//             id: childsnapshot.key,
//             ...childsnapshot.val()
//         })
//     });
//     console.log(expenses);
// });

// expenses.forEach((expense) => {
//     const key = database.ref('expenses').push(expense);
// });

// const key = database.ref('notes').push({
//     title: 'Todo',
//     body: 'Go for a run'
// });

// database.ref(`notes/-L6EDgdzVqJJVNrxQJ1j`).remove();

// const firebaseNotes = {
//     notes: {
//         id12:{
//             title:'first note'
//         }
//     }
// }

// const notes = [
//     {id: 12, title: 'first note'},
//     {id: 15, title: 'second note'},
//     {id: 18, title: 'third note'}
// ];

// database.ref().set(notes);

// const userDataChangeSuccess = (snapshot) => {
//     const val = snapshot.val();
//     const name = val.name;
//     const job = val.job;
//     const title = job.title;
//     const company = job.company;
//     console.log(`${name} is a ${title} at ${company}`);
// }
// const userDataChangesError = (error) => {
//     console.log('Errors accessing database', error);
// }

// database.ref().on('value', userDataChangeSuccess, userDataChangesError);

// setTimeout(() => {
//     database.ref().update({
//         job:{
//             title: 'Janitor',
//             company: "Smokey's Barbecue"
//         }});
// }, 5000);

// setTimeout(() => {
//     database.ref().update({
//         job:{
//             title: 'Fry Guy',
//             company: "McDonald's"
//         }});
//     database.ref().off('value', userDataChangeSuccess);
//     database.ref().off('value', userDataChangesError);
// }, 10000);

// setTimeout(() => {
//     database.ref().update({
//         job:{
//             title: 'Software Developer',
//             company: "FlightGlobal"
//         }});
// }, 15000);
// setTimeout(() => {
//     database.ref('location/city').set('Peoria');
// }, 15000);
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {});

// database.ref().set({
//     name: 'Steve Sargent',
//     age: 48,
//     isSingle: true,
//     job: {
//         title:'Sotware Developer',
//         company:'FlightGlobal'
//     },
//     stressLevel:3,
//     location:{
//         city: "Beaverton",
//         country: "United States"
//     }
// }).then(() =>{
//     console.log(`Initial set succeeded`);
// })
// .catch((error) => {
//     console.log(`Errors occurred with initial set: ${error}`)
// });

// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// })
// .then(() => console.log('Update succeeded'))
// .catch((error) => console.log(`Errors occurred in update: ${error}`));

// database.ref('isSingle').remove()
// .then(() => console.log('isSingle removed successfully from database'))
// .catch((error) => console.log(`Errors occurred removing 'isRemove' from database: ${error}`));

// database.ref().update({
//     name: 'Stephen Sargent',
//     isSingle: null,
//     job: {
//         title:'Medical Transport',
//         company:'Wapato Shores'
//     },
//     'location/city': 'Beaverton'
// }).then(() => console.log('Record updated'))
// .catch((error) => console.log('Errors setting name and isSingle'));



// database.ref('location').update({
//     city:"Aloha",
//     state: "Oregon"
// }).then(() => console.log('City/State updated'))
// .catch((error) => console.log('Errors setting city'));

// database.ref('location/city').set('Portland')
// .then(() =>{
//     console.log(`City changed to Portland`);
// })
// .catch((error) => {
//     console.log(`Errors occurred with initial set: ${error}`)
// });

// database.ref('attributes').set({
//     height:72,
//     weight: 230
// }).then(() =>{
//     console.log(`Attributes successfully!`);
// })
// .catch((error) => {
//     console.log(`Errors occurred with initial set: ${error}`)
// });
