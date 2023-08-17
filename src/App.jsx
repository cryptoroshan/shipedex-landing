import "./App.css";

function App() {
  return (
    <>
      <section className="flex flex-col justify-between w-full min-h-screen bg-[url('/images/page1-background.png')] bg-cover bg-no-repeat bg-center">
        <img className="w-64 mx-auto" src="/images/logo.png" />
        <div className="relative flex flex-col gap-8 justify-center mx-auto mb-20 lg:mb-[142px] text-center">
          <img
            className="absolute mx-auto left-0 right-0"
            src="/images/ellipse.png"
          />
          <div className="flex flex-col max-w-[550px]">
            <p className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#55FF7A] via-[#55FF7A] via-[50%] to-[#23096D] to-[100%]">
              The one-stop-shop DEX
            </p>
            <p className="text-base lg:text-xl font-semibold text-[#9DE8C3]">
              To manage liquidity with highly innovative and flexible solutions,
              powered by frenship
            </p>
          </div>
          <p className="text-xl font-bold text-white">EXCHANGE</p>
        </div>
      </section>
      <section className="relative flex flex-col justify-center w-full lg:min-h-screen bg-[url('/images/page2-background.png')] bg-cover bg-no-repeat bg-center">
        <img
          className="absolute left-0 right-0 top-0 bottom-0 m-auto w-1/3 lg:w-[calc((100vw-350px)/2-100px)]"
          src="/images/bone.png"
        />
        <img
          className="max-md:mt-12 w-3/4 lg:w-1/3 mx-auto"
          src="/images/page2-title.png"
        />
        <div className="flex flex-col gap-16 xl:gap-[150px] 2xl:gap-[264px] px-4 xl:px-[50px] 2xl:px-[175px] mt-4 lg:mt-[74px] text-center text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold max-md:mb-12">
          <div className="flex flex-row justify-between">
            <p className="text-[#DF9B35] w-1/3">
              Liquidity pool voters received $BONE rewards from bribes.
            </p>
            <p className="text-[#3F9CF2] w-1/3">
              Increasing value of sticky bribes drives demand for veSHIP to
              receive bribes and pool fees.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[#5BA000] w-1/3">
              This drives up demand for $SHIP and its price. $SHIP emissions are
              now more valuable.
            </p>
            <p className="text-[#CD49B8] w-1/3">
              More $BONE in the protocol and TVL expands. Users provide
              liquidity to gain free access to $SHIP.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center w-full lg:min-h-screen bg-[url('/images/page3-background.png')] bg-cover bg-no-repeat bg-center">
        <img
          className="w-full lg:w-2/3 mx-auto mt-[129px]"
          src="/images/roadmap.svg"
        />
      </section>
      <section className="flex flex-col justify-center w-full py-12 lg:min-h-screen bg-[url('/images/page4-background.png')] bg-cover bg-no-repeat bg-center">
        <img className="w-[352px] mx-auto" src="/images/shiba-pepe.png" />
        <p className="text-2xl lg:text-6xl font-bold text-black opacity-80 mt-[23px] text-center">
          JOIN US IN OUR MISSION
        </p>
        <p className="text-base lg:text-3xl font-bold text-black opacity-80 mt-[9px] text-center">
          Forging Frenship and amplifying liquidity in the Shibarium ecosystem
        </p>
        <div className="flex flex-row gap-[30px] mt-[23px] mx-auto">
          <a href="/" target="_blank">
            <img className="rounded-full" src="/images/twitter.svg" />
          </a>
          <a href="/" target="_blank">
            <img className="rounded-full" src="/images/telegram.svg" />
          </a>
          <a href="/" target="_blank">
            <img className="rounded-full" src="/images/medium.svg" />
          </a>
          <a href="/" target="_blank">
            <img className="rounded-full" src="/images/gitbook.svg" />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
