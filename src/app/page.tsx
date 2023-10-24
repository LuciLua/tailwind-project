export default function homepage() {
  return (
    <div className="pt-[80px] max-w-[1300px] m-auto min-h-[100dvh] flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col p-[10px] overflow-hidden">
        <div className="leading-8 mb-5">
          <h1 className="text-[#ddd] pt-5 text-[4em] leading-[50px]">Welcome to our site</h1>
          <h2 className="text-primary p-5 text-[1.5em] self-start">Hello, World!</h2>
        </div>
        <div className="bg-[#ddd] w-[720px] h-[400px] rounded-[12px] overflow-hidden shadow-[#121212] shadow-2xl">
          <header className="flex gap-5 top-0 bg-[#fff] h-[20px] w-full px-[10px] justify-between">
            <div className="flex gap-1 items-center">
              <div className="rounded-full bg-[#afafaf] w-[14px] h-[14px]" />
              <div className="rounded-full bg-[#afafaf] w-[14px] h-[14px]" />
              <div className="rounded-full bg-[#afafaf] w-[14px] h-[14px]" />
            </div>
            <div className="flex gap-3">
              <p>icon</p>
              <p>icon</p>
              <p>icon</p>
              <p>icon</p>
            </div>
          </header>
          <div className="bg-[#ddd] w-full h-full p-[50px]" >
            <p>Tailwindcss test</p>
          </div>
        </div>
      </div>
    </div>
  )
}
