<script lang="ts">
  let active = false;
  let animate = false;

  const onClick = () => {
    active = true;
    animate = false;

    setTimeout(() => {
      animate = true;
    });
  };
</script>

<button on:click={onClick} class:active class:animate>
  <div class="like-icon">
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
    >
      <g id="Layer_2">
        <path
          fill="#FFB636"
          d="M378.553,355.648L45.117,500.733c-21.735,8.65-43.335-12.764-34.874-34.572l145.709-338.684"
        />
      </g>
      <g id="Layer_3">
        <path
          fill="#FFD469"
          d="M10.243,466.161l11.58-26.916c0.993-1.514,1.983-3.03,2.977-4.543
          c57.597-87.744,116.038-174.952,176.475-260.768l67.765,69.46c-51.13,35.102-217.15,206.669-251.925,252.177
          C9.545,488.608,5.866,477.443,10.243,466.161z"
        />
      </g>
      <g id="Layer_4">
        <path
          fill="#A06C33"
          d="M304.382,204.434c61.854,61.854,95.685,128.308,75.564,148.43c-20.121,20.121-86.575-13.71-148.43-75.564
          s-95.685-128.308-75.564-148.43S242.527,142.579,304.382,204.434z"
        />
      </g>
    </svg>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
      class="confetti"
    >
      <g id="Layer_5">
        <path
          fill="#F7F9AA"
          d="M155.601,327.572c0,6.012-4.874,10.885-10.885,10.885s-10.885-4.873-10.885-10.885
              c0-6.012,4.873-10.885,10.885-10.885S155.601,321.56,155.601,327.572z"
        />
      </g>
      <g id="Layer_6">
        <path
          fill="#FFB636"
          d="M501.986,213.16c0,8.628-6.994,15.622-15.622,15.622s-15.622-6.994-15.622-15.622
                s6.994-15.622,15.622-15.622S501.986,204.532,501.986,213.16z M397.663,421.182c-8.628,0-15.622,6.994-15.622,15.622
                c0,8.628,6.994,15.622,15.622,15.622s15.622-6.994,15.622-15.622C413.285,428.176,406.29,421.182,397.663,421.182z"
        />
      </g>
      <g id="Layer_7">
        <path
          fill="#BEA4FF"
          d="M355.949,79.523c-1.34,9.065-7.197,17.072-16.07,21.968c-6.126,3.38-13.33,5.137-20.807,5.137
                c-2.354,0-4.734-0.174-7.117-0.526c-5.288-0.782-10.581,0.016-14.52,2.189c-1.766,0.974-4.8,3.105-5.293,6.438
                c-0.492,3.333,1.796,6.251,3.203,7.694c3.058,3.135,7.725,5.381,12.849,6.22c0.141,0.015,0.281,0.02,0.422,0.041
                c21.619,3.196,37.061,20.32,34.421,38.173c-1.34,9.066-7.197,17.073-16.071,21.969c-6.126,3.38-13.329,5.137-20.806,5.137
                c-2.354,0-4.734-0.174-7.117-0.526c-5.287-0.783-10.582,0.015-14.521,2.189c-1.766,0.974-4.8,3.105-5.293,6.438
                c-0.79,5.349,5.778,12.411,16.47,13.991c5.817,0.86,9.836,6.273,8.976,12.091c-0.782,5.29-5.328,9.092-10.52,9.092
                c-0.519,0-1.043-0.038-1.571-0.116c-21.619-3.196-37.06-20.321-34.421-38.173c1.34-9.066,7.197-17.073,16.071-21.969
                c8.055-4.444,17.972-6.082,27.924-4.611c5.288,0.781,10.58-0.016,14.52-2.189c1.766-0.974,4.8-3.105,5.293-6.438
                c0.777-5.262-5.577-12.171-15.963-13.898c-0.17-0.017-0.341-0.031-0.512-0.056c-9.951-1.472-18.971-5.908-25.395-12.493
                c-7.077-7.254-10.367-16.614-9.026-25.681c1.34-9.065,7.197-17.072,16.07-21.968c8.055-4.444,17.972-6.082,27.924-4.611
                c5.286,0.78,10.581-0.016,14.52-2.189c1.766-0.974,4.8-3.105,5.293-6.438c0.492-3.333-1.796-6.251-3.203-7.694
                c-3.142-3.22-7.977-5.516-13.267-6.297c-5.817-0.86-9.836-6.273-8.976-12.091c0.859-5.818,6.274-9.832,12.091-8.977
                c9.951,1.472,18.971,5.908,25.395,12.493C354,61.097,357.29,70.457,355.949,79.523z"
        />
      </g>
      <g id="Layer_8">
        <path
          fill="#FF6E83"
          d="M81.731,159.689c0,9.777-7.926,17.703-17.703,17.703s-17.703-7.926-17.703-17.703
                c0-9.777,7.926-17.703,17.703-17.703S81.731,149.911,81.731,159.689z M398.176,139.236c-11.296,0-20.452,9.157-20.452,20.452
                s9.157,20.452,20.452,20.452s20.452-9.157,20.452-20.452S409.472,139.236,398.176,139.236z M215.529,395.899
                c-11.296,0-20.452,9.157-20.452,20.452s9.157,20.452,20.452,20.452c11.296,0,20.452-9.157,20.452-20.452
                S226.825,395.899,215.529,395.899z M486.832,302.253c3.093-5.989,0.745-13.352-5.244-16.445c-2.388-1.232-5.238-2.868-8.538-4.761
                c-28.993-16.633-89.319-51.242-160.352,6.109c-5.245,4.234-6.063,11.919-1.829,17.163c4.233,5.245,11.917,6.065,17.163,1.829
                c58.035-46.856,104.882-19.985,132.871-3.928c3.403,1.952,6.617,3.796,9.483,5.276c1.791,0.925,3.705,1.363,5.591,1.363
                C480.397,308.859,484.664,306.451,486.832,302.253z"
        />
      </g>
      <g id="Layer_9">
        <path
          fill="#59CAFC"
          d="M434.834,62.776c0,6.012-4.874,10.885-10.885,10.885c-6.012,0-10.885-4.873-10.885-10.885
                s4.873-10.885,10.885-10.885C429.961,51.89,434.834,56.764,434.834,62.776z M46.324,11.894c-6.012,0-10.885,4.873-10.885,10.885
                s4.873,10.885,10.885,10.885S57.21,28.791,57.21,22.779S52.336,11.894,46.324,11.894z M217.005,153.951
                c1.231-2.414,2.749-5.163,4.356-8.073c8.154-14.771,19.32-34.999,19.992-58.559c0.807-28.304-13.934-54.002-43.812-76.38
                c-5.187-3.885-12.539-2.828-16.421,2.357c-3.884,5.186-2.829,12.538,2.357,16.421c23.75,17.788,35.01,36.411,34.425,56.933
                c-0.51,17.872-9.697,34.516-17.08,47.889c-1.701,3.083-3.309,5.994-4.713,8.747c-2.945,5.771-0.654,12.836,5.116,15.781
                c1.708,0.872,3.529,1.285,5.323,1.285C210.815,160.352,214.932,158.014,217.005,153.951z"
        />
      </g>
    </svg>
  </div>
  <span class="like-text fade-in" id="like-text"> &nbsp; </span>
</button>

<br />

<span class="text-secondary text-sm font-cursive">This post has 0 likes</span>

<style lang="postcss">
  button {
    font-size: 1.5em;
    font-family: 'Fira Sans', sans-serif;
    text-align: center;
    display: inline-block;
    text-align: center;
    display: inline-block;
    position: relative;
    max-width: 6em;
    cursor: pointer;
  }
  button .like-icon {
    position: relative;
    z-index: 100;
    height: 6em;
    width: 6em;
    display: block;
    text-align: center;
    line-height: 6em;
    transition: all 300ms ease;
  }
  button .like-icon:before,
  button .like-icon:after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: scale(0);
    -webkit-ransform: scale(0);
  }
  button .like-icon:before {
    background: #bea4ff;
  }
  button .like-icon:after {
    background: var(--color-inverse);
  }
  button .like-icon svg {
    position: absolute;
    top: calc(50% - 1.8em);
    right: calc(50% - 1.8em);
    filter: grayscale(100%);
    display: inline-flex;
    vertical-align: middle;
    width: 3em;
  }
  button .like-icon .confetti {
    transition: opacity 0.2s ease;
    opacity: 0;
  }
  button .like-icon:hover .confetti {
    opacity: 1;
  }
  button .like-text {
    font-size: 0.8em;
    user-select: none;
    position: relative;
    top: 0;
    left: -0.1em;
  }
  button .like-text:after {
    content: '';
  }
  button:disabled:not(.active) .like-icon:hover svg {
    filter: grayscale(1);
  }
  button.active {
    cursor: default;
  }
  button.active .like-icon svg {
    transition: all 300ms ease-in-out;
    /* transform: scale(1.3); */
    filter: grayscale(0);
  }
  button.animate .like-icon:after {
    animation: like-b 0.6s 0.2s forwards;
  }
  button.animate .like-icon:before {
    animation: like-a 1s 0s forwards;
  }
  button.active .like-icon .confetti {
    transition: opacity 0.8s ease;
    opacity: 1;
  }
  button.animate .like-text {
    top: 0.5em;
  }
  button.animate:after {
    content: 'Thanks!';
    animation: thank-you 1s 0s forwards;
    background-color: theme('colors.ochre.500');
    color: white;
    font-size: 0.5em;
    border-radius: 1em;
    padding: 0em 0.75em;
    position: absolute;
    top: -0.5em;
    left: 50%;
    transform: translateX(-50%);
    animation: thank-you 1.2s 0s forwards;
    z-index: 100;
  }

  .like-text {
    transition: top 0.8s ease, opacity 0.4s ease 0.4s;
    opacity: 1;
  }
  .like-text.fade-in {
    transition: all 0s;
    opacity: 0;
  }

  @keyframes thank-you {
    0% {
      opacity: 0;
    }
    8% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      top: -2em;
      opacity: 0;
    }
  }

  @keyframes like-a {
    50% {
      transform: scale(1.1);
    }
    51% {
      transform: scale(0);
    }
  }

  @keyframes like-b {
    50% {
      transform: scale(1.11);
      opacity: 1;
    }
    100% {
      transform: scale(1.11);
      opacity: 0;
    }
  }
</style>
