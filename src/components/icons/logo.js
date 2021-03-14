import React from 'react';

const IconLogo = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
  //   <title>Logo</title>
  //   <g transform="translate(-8.000000, -2.000000)">
  //     <g transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //       <polygon
  //         id="Shape"
  //         stroke="currentColor"
  //         strokeWidth="5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         points="39 0 0 22 0 67 39 90 78 68 78 23"
  //       />
  //     </g>
  //   </g>
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
	<defs>
		<image width="87" height="100" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABkCAMAAADE+FxdAAAAAXNSR0IB2cksfwAAAutQTFRFAAAADB4vDBsxChsyFy5GCxswCxowChkvCxowCxkwQEBACyA1DBowChkvCxkwDBsvICBACxkwChkvCxovEhs3DBoyChowChkvJCRJDhwzChowChowChwwERozCxowChkvChovDx0zFStADBovChowChovDBkxGhozgICACxswCxowChovDBsxDBwwCxovCxovDB4xDhwyChowChkwCxkvEiQ3ECAwCxovChovCxkvCxsx////DBowCxowChozCxwyCxkwChkxDRs2CxovCxovDRozChowChkwDRowKytVCxsxCxkvDRkvChowCxkvMzMzCxkwCxkwCxoxFB0xCxowChkvHBw5ChsxCxkwChkvDRoxDRowChkwCxkwDhwwCxovCxowChowDRowChovCxsxChswDBowZP/aYvjWXOvMVdq+RrKhNIR/GDxJUcy1IFFZP56SChowQaeZZP3ZYvnWJmJmQqmaDSE1FjdGI1ddRbCgY/vXVtvAH05XGkFNLnV1HEdRN4yFDiM3OZKKLnV0IVNbXu/PWuPGCxwyDyU4M4F9W+fIMn57W+jJTMKtUtG4W+rLZP7aSbmnCxsxQ6ycP5+TV9zBIlZdJFpgQ6ucEiw9HUtULXJxVdm+G0JONoiDSbimG0NPI1leL3d1Ey0+PpyRRa+fJFlfPZuQSr2pMn97OJCHGT1LDB8zEy9AH09XLnZ0V93BUtK6N4uEY/rWNYV/Y/zYX/PRXezMV97CUc61QaWYEzBBChsvDBsvCxovDBoxCxwvCxswCxowCxkwCxkwDRoyChowCxowEho1ChkwDBsyCxkvDB8yCxsxCxkwCxkyCyE3CxkwCxkwVVVVDRsxCxovESIzDBsvCxowChkvDx41Dhw5ChkvDB0xCho0ChowChowCxsxCxkvFCc7ChowChowDhwvDBwxChkwChowChwxCxowCxovCxwyCxoxCxovExwvCxovCxovDBwxCxovCxovDBswChkw6/TG2QAAAPl0Uk5TACtpTAswvv/wbwQYm/3UQQh586gcV+H0BzfG20oepP6yIwyC9viDCgJg5uJUQM69KiSu+40OEIz56F4BausySNWYE7jtFJX8OwZzolHc8gXB1kQan6wJfVvdTjrJtiWHu+RQ90N7gP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////fFbYWFyGnrW/TfXvHatCtyly8UcXoeoDOc0PZ+ytIhKXPjHE5V3nDfrFNlPfsUnavC542Run7j/SkYVmUfPKdwAAA2FJREFUeJzt2VdQE1EUgOGA4NKCAaUIAiqgIIpiFFAQOwoidrA30KBiwQY2sKBiF8TesPfeC9ixoqKIBey99/LovbsoIWSzu3fPjjPq/5Q5k/0mD9nM5lyZjHd6+iUM+L+bb4YlKYoyMjaBVU3N5BSdeSlAVWFhSf2udBko1sqaUs/GwhZCLWtHaWZfTrTq4OhUjEWVryBKrejsok1FuVaqTKy6uVdhUXEeVQnZap46VFz1GgSqV00OFaWsVVug6u3jy82i6tT1E6Ca+NfjpeLsAniz9RvwVlHyho14qXqNhai4JvpunGrTwGZCWZRnc91qULARgYpyamGqgw1pSabiQoNbsagBrclVXJu22tR27eXiWFQHB001LNxGtIpyCVeoq34dPSBUXKfOhWyXrlAqrlt3RlU4Qqoo3x74ccCkJzCL6oW+Gb3hWYqKiJT1kcKlPGV9JXGVErnUf/cPuyq1ovr1HxA9EN5lGjRYGlelGhIjjasaCuQOG05XCI+AcUcyr2PjRo0eQw/Ggrq4ccynjod2qWh6kgDujqcnE8DdifRkErgbT08Swd1EejIZ2o2bggdTk2DdadNn0IOZHFfxdGfNppszN5m53VLmwbhFS06N5WKJ3Pmcn5bw92zBQmlcVdQiGHdxEtOSpcuWM/AKEFft+xuzkp6kQbsUlUaPVoG7q+nRGnB3LT1aJ5G7HtzdQI82grub6NFmYDdpC3NrbIVwU7cxbd+xcxfD7ua4jOw+Vqm4ntEI3T0cV5G5e/dxsSTu/hSuhx0+7gH1Dh46fCThKLf6F/6/+FfcdIncDElYuUwButz51TGZzFuCRYz8ON4cWYFtuQqyPMGspAxOugKq8lOFO1Cv02DsGcMim8RMEbtUtexDNFeUtulnRavngoO0rFTPXxCnKgPZNu0XBW3sNbqUxaLireLlK4Sq+VV2FZd9TesBFkfX/XN0s6gbuUJVX5+bnCrK7dZtQeydPD4qLv8u/2V77j2+Ku7+A37qQ3chB08ov0ePuVUXZ4KT6ic+T3WrTo6ER75ZOn+anz0nU3EvrNnUlxnkKirMOUKbGir+bDrvVTFVbpYtVsW9flOUffsOQkUFvVc7PfqQCaTiPn4qUD8bsx2zEfblK1KV3/JhVVRO5Pcfxc7XWPsJ2nUXJULIPQkAAAAASUVORK5CYII="/>
		<image width="49" height="70" id="img2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABGCAMAAABSZYxXAAAAAXNSR0IB2cksfwAAAQJQTFRFAAAAABIkCRcuChkvChkvCRkuChguCRIsBxkuCRkuChkuChkuCRkvCBkpAAAkCBksCRgvCRguCRgvChgvChkuCRYtBRQuCRgvCRgvAA0mCBkuCRguCRYsChguBxYsCRkuAAAaCRgtCRkuBhksCRguCBgtCRkvCRkuCRcuCRkuCRguCBgsCRguCRkuChcuChgvChcuCRguCRkuCRguCRguCRguChgvChkvChkvCRkvBhYsCRkuCRkvCRguCBguCRgrChgvAAAgBxYsABYsCRkuCRkvChguChguCRguCRguCRgvChgvChcvCRkuCBctCRgvCRgvCRguCRkvCRctChguABQnr3tfXwAAAFZ0Uk5TAA5u7//4ah1Ij8y4Uh8HXOXI2/GcOTLgqhR7/VHpI+EKVfcpsWD2wzj5rED+kU3UhPOm9L3ynpnPxS7YxK1/NtUIRRfZctFpstz8n4OwRPuTwPVa1g20H9lHAAABMklEQVR4nO3VyVICMRAG4IwG1FEmIogrqLgr4r6N27iCgru+/6uoZVnSSaqT34uX+S+55KtOOpVqIdL8JOjqljSZbE9vXxj2D+SsIFKDUk9+6HstFIctojRigI6MmmBsfIIT0hSTZRaYojLFA0NMz1RBMTvnAIaYX0DFogvoYmkZFMGKE2hi1XkLWSMgt+YuQWvU11Gx4QE2idjyENtEhB6CnsoH4CIPix0idj3EHlxjv6NRB4c+QoGNkjKGBfoYfxBHsDiGxQkqqqeoKJ+hIjlHBZkFXkLBIkZFIlCBf44LWFzCQqDiiorrjFPcUCEa7OT/SlMTgbq940VLEyIqtQusULr4nOb1+xojYlOI6OGRERYgoicGPNtE5YURrzaRZcDbu00U9W2/10osnUqT5j/zAVisLOTF7AStAAAAAElFTkSuQmCC"/>
	</defs>
	<style>
		
	</style>
	<use id="Background" href="#img1" x="6" y="0" />
	<use id=" " href="#img2" x="21" y="19" />
	<path id="Text layer 2" fill="#64ffda" d="M62.7 29.81L62.7 35.29Q59.5 33.76 56.66 33.01Q53.83 32.26 51.18 32.26Q46.59 32.26 44.08 34.04Q41.61 35.82 41.61 39.11Q41.61 41.86 43.25 43.28Q44.92 44.67 49.54 45.54L52.93 46.23Q59.22 47.43 62.2 50.46Q65.21 53.47 65.21 58.53Q65.21 64.57 61.15 67.69Q57.11 70.81 49.29 70.81Q46.34 70.81 43 70.14Q39.69 69.47 36.12 68.16L36.12 62.37Q39.55 64.29 42.83 65.27Q46.12 66.24 49.29 66.24Q54.1 66.24 56.72 64.35Q59.34 62.46 59.34 58.95Q59.34 55.89 57.44 54.16Q55.58 52.44 51.29 51.58L47.87 50.91Q41.58 49.65 38.77 46.98Q35.96 44.31 35.96 39.55Q35.96 34.04 39.83 30.87Q43.72 27.7 50.54 27.7Q53.46 27.7 56.5 28.22Q59.53 28.75 62.7 29.81Z" />
</svg>
);

export default IconLogo;
