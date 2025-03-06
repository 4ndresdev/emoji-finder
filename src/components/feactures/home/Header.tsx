const Header = () => {
  return (
    <header className="relative w-full h-auto overflow-hidden pt-3 px-6 md:px-0">
      <div className="pattern" />
      <div className="mx-auto max-w-7xl md:px-4 sm:px-6 lg:px-8 relative">
        <nav className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="logo" width={30} height={30} />
          </div>
          <a
            className="-mx-1.5 -my-1 flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
            href="#!"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="size-5 fill-slate-400"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
            </svg>
            <span>
              Share<span className="sr-only sm:not-sr-only"> on X</span>
            </span>
          </a>
        </nav>
        <div className="flex justify-center text-center lg:pb-7 lg:pt-5 lg:text-left">
          <div className="flex items-center lg:items-start max-w-[37rem] flex-col py-16 lg:pb-11 lg:pt-12 gap-5">
            <div className="flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500">
              <p>316 emojis</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <p>MIT license</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <p>React &amp; Vue libraries</p>
            </div>
            <h1 className="text-[1.75rem] leading-10 font-extrabold md:leading-12 md:tracking-tight md:text-5xl">
              <span className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Beautiful
              </span>{" "}
              hand-crafted SVG icons, by the makers of Tailwind CSS.
            </h1>
            <a
              className="flex items-center justify-center gap-3 max-w-36 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
              href="#!"
            >
              <svg className="size-4" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Documentation</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-auto lg:justify-center items-center">
            <div className="relative aspect-square w-72 flex-none">
              <svg
                viewBox="0 0 288 288"
                fill="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <g>
                  <mask
                    id="c"
                    className="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="-333"
                    y="-242"
                    width="956"
                    height="927"
                  >
                    <path fill="url(#b)" d="M-333-242h956v927h-956z"></path>
                  </mask>
                  <g mask="url(#c)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M108-488.25c-155.33 0-281.25 125.92-281.25 281.25C-173.25-51.67-47.33 74.25 108 74.25c155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75-207c0-162.786 131.964-294.75 294.75-294.75S402.75-369.786 402.75-207 270.786 87.75 108 87.75-186.75-44.214-186.75-207Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-36-146.25c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-330.75 135c0-162.786 131.964-294.75 294.75-294.75S258.75-27.786 258.75 135 126.786 429.75-36 429.75-330.75 297.786-330.75 135Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M342-74.25c-115.566 0-209.25 93.684-209.25 209.25S226.434 344.25 342 344.25 551.25 250.566 551.25 135 457.566-74.25 342-74.25ZM119.25 135c0-123.021 99.729-222.75 222.75-222.75S564.75 11.979 564.75 135 465.021 357.75 342 357.75 119.25 258.021 119.25 135Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M234 114.75c-11.184 0-20.25 9.066-20.25 20.25s9.066 20.25 20.25 20.25 20.25-9.066 20.25-20.25-9.066-20.25-20.25-20.25ZM200.25 135c0-18.64 15.11-33.75 33.75-33.75s33.75 15.11 33.75 33.75-15.11 33.75-33.75 33.75-33.75-15.11-33.75-33.75ZM99 87.75c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25c26.095 0 47.25-21.155 47.25-47.25S125.095 87.75 99 87.75ZM38.25 135c0-33.551 27.199-60.75 60.75-60.75s60.75 27.199 60.75 60.75-27.199 60.75-60.75 60.75S38.25 168.551 38.25 135Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M342-110.25C206.552-110.25 96.75-.448 96.75 135c0 135.448 109.802 245.25 245.25 245.25 135.448 0 245.25-109.802 245.25-245.25C587.25-.448 477.448-110.25 342-110.25ZM83.25 135C83.25-7.904 199.096-123.75 342-123.75S600.75-7.904 600.75 135 484.904 393.75 342 393.75 83.25 277.904 83.25 135Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M108 195.75c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75 477c0-162.786 131.964-294.75 294.75-294.75S402.75 314.214 402.75 477 270.786 771.75 108 771.75-186.75 639.786-186.75 477Z"
                      fill="#94A3B8"
                      fillOpacity=".1"
                      stroke="#0F172A"
                      strokeOpacity=".2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    ></path>
                  </g>
                </g>
                <defs>
                  <radialGradient
                    id="b"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-492.00038 6.00263 -6.1904 -507.39124 188 139)"
                  >
                    <stop stopColor="#D9D9D9"></stop>
                    <stop
                      offset=".81"
                      stopColor="#D9D9D9"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                </defs>
              </svg>
              <div className="size-60 backdrop-blur-2xl border border-slate-200 rounded-2xl flex justify-center items-center absolute inset-0 transform rotate-12 translate-x-14">
                <img src="/logo.svg" alt="Logo" className="size-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
