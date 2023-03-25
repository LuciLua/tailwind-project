export default function HomePage() {
  return (
    <div className="mx-auto flex h-fit min-h-[500px] w-full flex-col items-center justify-center bg-[radial-gradient(at_bottom,#2d3dec_1%,#191919_50%)] from-secondary-dark pt-[calc(100px+100px)] text-terciary">
      <div className="flex max-w-[1300px] flex-col items-center justify-center">
        <div className="mb-[30px]">
          <h1 className="m-auto text-center text-[20px] font-normal sm:text-[60px]">
            Agora você pode ter <br />
            <span className="text-[40px] font-bold sm:text-[80px]">
              o site dos seus sonhos
            </span>
          </h1>
        </div>
        <div className="flex gap-6">
          <button className="rounded-[6px] bg-gradient-to-r from-[#7d1ebd] to-[#1e316f] py-2 px-4 sm:py-4 sm:px-8">
            Quero um site
          </button>
          <button className="py-2 px-4 sm:py-4 sm:px-8">Conheça mais</button>
        </div>
        <div className="mt-[80px] font-thin">scroll to more</div>
      </div>
      <div className="my-[30px] flex w-full max-w-[100vw] flex-col items-center justify-center bg-[#161616] py-[30px] ">
        <div className="my-[40px] flex h-fit max-h-fit w-fit max-w-[1300px] flex-wrap justify-center shadow-lg shadow-[#090909]">
          <div className="flex h-[350px] w-[250px] items-center justify-center bg-primary text-terciary">
            card
          </div>
          <div className="flex h-[350px] w-[250px] items-center justify-center bg-secondary text-terciary">
            card
          </div>
          <div className="flex h-[350px] w-[250px] items-center justify-center bg-terciary text-secondary">
            card
          </div>
          <div className="flex h-[350px] w-[250px] items-center justify-center bg-quartenary text-terciary">
            card
          </div>
        </div>
      </div>
    </div>
  )
}
