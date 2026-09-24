import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h1>About the wild oasis</h1>
    </div>
  );
}
