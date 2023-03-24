function Menu() {
    return (
        <div className="
        fixed
        flex
        w-full
        px-10
        h-[80px]
        top-0
        bg-[#121212e1]
        backdrop-blur-[10px]
        border-b-[#121212]
        border-b-[1px]
        ">
            <div className="
            justify-between
            items-center
            mx-auto
            text-[#efefef]
            flex
            max-w-[1300px]
            w-full
            ">

                <ul><li>Logo</li></ul>
                <ul className="
            flex
            lg:gap-32
            gap-10
            ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="
            flex
            lg:gap-32
            gap-10
            ">
                    <li>Search</li>
                    <li>Quero um site</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu