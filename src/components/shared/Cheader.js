import Link from "next/link";

export default function Cheader () {
  const menuItems = [
    {text: 'خانه', link: '/'},
    {text: 'ورود', link: '/login'},
    {text: 'فرم پیچیده', link: '/complexform'},
    {text: 'درباره ما', link: '/contactUs'},
  ]
  return <header>
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.link}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
}
