function Menu() {
  return (
    <div className="fixed top-0 flex h-[80px] w-full bg-primary-dark-opacity75 px-10 backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between text-[#efefef]">
        <ul>
          <li>Logo</li>
        </ul>
        <ul className="flex gap-10 lg:gap-32">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-10 lg:gap-32">
          <li>Search</li>
          <li>Quero um site</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
