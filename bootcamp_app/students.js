const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohort}%`, limit];
const queryString = `SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts on cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2
  `;

pool.connect()
.then(() => {
  console.log('database connected');
})
.catch((err) => {
  console.error('database connection error', err.stack)
});

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in ${user.cohort} cohort`);
  })
})
.catch(err => {
  console.error('query error', err.stack)
});