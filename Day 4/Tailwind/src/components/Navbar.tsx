type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="py-[10px] px-4 w-full bg-[#EEF1F3]">
      <div className="mx-[22.5pxJ max-w-screen-xl flex w-full">
        <div className="w-12 aspect-square">
          <a rel="noopener" href="/">
            <img
              src="https://statics.olx.co.id/olxid/astra_branding/olx-indonesia-logo.svg"
              className="w-full h-full"
              alt="OLX Autos Indonesia"
              // width="180"
              // height="45"
            ></img>
          </a>
        </div>
        <div className="mx-4 flex min-w-[630px] w-full">
          <div className="px-2 flex items-center bg-white border-2 border-black rounded-[4px]">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              className="pl-4 h-10"
              fill-rule="evenodd"
            >
              <path
                className=""
                d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
              ></path>
            </svg>
            <input
              type="text"
              className="text-ellipsis pl-4 h-10 focus:outline-none"
              placeholder="Cari kota, area, atau lokalitas"
              value="Jakarta Selatan, Jakarta D.K.I."
            ></input>
            <button className="w-1 aspect-square" type="button" title="search">
              <span className="rounded-full w-full h-full flex items-center justify-center">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="items—center justify-center ">
          <button title="firstButton" type="button"></button>
        </div>
      </div>
    </div>
  );
}
