const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
try {
const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
  const fetchy = await fetch(url);
  return fetchy.json();
  }));
console.log('users', users);
console.log('posts', posts);
console.log('albums', albums);
} catch(err) {
console.log(err, 'oooopsssss!');
}}