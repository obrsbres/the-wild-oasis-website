import Counter from '../components/Counter';
import Navigation from '../components/Navigation';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
