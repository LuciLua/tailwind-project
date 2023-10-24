function Menu() {
  return (
    <div className="fixed top-0 flex h-[80px] w-full bg-primary-dark-opacity75 px-10 backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between text-[#efefef]">
        <ul>
          <li className="text-primary font-extrabold text-[30px]">Logo</li>
        </ul>
        <ul className="flex gap-10 lg:gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Prices</li>
        </ul>
        <div className="flex gap-10 lg:gap-32">
          <input className="border-[1px]  border-primary w-[250px] h-[40px] rounded-lg bg-primary-dark py-3 px-4"  placeholder="Search..."/>
        </div>
      </div>
    </div>
  )
}

export default Menu
