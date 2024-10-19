import { format } from 'date-fns';

import { TBookingDb } from '@/app/api/types';
import { add30Minutes } from '@/slices/hatch/booking-page/utils';

export function generateLoginEmailHtml(params: { url: string }) {
  const { url } = params;

  return `
  <body style="background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Ubuntu,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:0 48px">
              <tbody>
                <tr>
                  <td><svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="55pt" viewBox="0 0 2362.000000 1181.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)" fill="#400c1c" stroke="none">
                        <path d="M8685 9799 c-256 -42 -461 -203 -528 -414 -21 -67 -22 -85 -22 -480 0 -402 0 -412 23 -484 30 -95 73 -161 153 -236 73 -68 170 -122 279 -157 65 -20 95 -23 230 -23 148 1 159 2 237 31 45 17 107 46 138 65 67 40 187 162 233 237 l32 53 -62 28 c-35 16 -118 54 -185 85 -67 31 -126 56 -131 56 -4 0 -23 -21 -40 -46 -48 -67 -121 -99 -227 -99 -69 1 -87 5 -135 30 -66 36 -97 79 -105 148 -4 29 -5 187 -3 352 3 288 4 302 25 342 76 141 329 153 454 23 l45 -48 165 67 c90 37 170 70 177 75 22 14 -47 124 -133 213 -66 67 -96 89 -165 122 -47 23 -116 48 -155 56 -75 16 -218 18 -300 4z"></path>
                        <path d="M13568 9800 c-133 -24 -263 -88 -347 -171 -104 -104 -144 -201 -144 -349 1 -147 37 -245 125 -344 99 -111 232 -179 427 -216 103 -19 212 -58 244 -87 23 -22 47 -66 47 -88 0 -10 -7 -33 -16 -51 -61 -127 -365 -105 -520 38 l-44 41 -53 -49 c-28 -26 -91 -85 -139 -130 l-87 -82 51 -57 c104 -116 251 -205 395 -240 97 -24 285 -16 393 15 213 61 385 211 436 378 34 112 17 309 -36 413 -30 59 -135 159 -205 195 -75 40 -191 77 -320 105 -115 24 -211 67 -240 106 -25 34 -25 95 -1 141 12 24 33 41 73 59 49 22 65 25 128 20 83 -6 184 -47 250 -101 l41 -34 143 110 143 110 -53 55 c-98 99 -192 156 -329 198 -64 19 -288 29 -362 15z"></path>
                        <path d="M6255 9778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 3 220 c2 144 -3 291 -14 428 -16 201 -15 246 5 196 5 -13 59 -150 119 -304 l110 -280 150 -3 c137 -2 152 -1 161 16 5 10 57 144 116 297 59 154 111 285 117 290 7 7 8 -18 4 -75 -3 -47 -9 -244 -12 -437 l-6 -353 221 0 221 0 0 885 0 885 -222 -2 -222 -3 -185 -427 c-102 -236 -188 -428 -191 -428 -3 0 -83 184 -179 408 -96 224 -180 417 -188 430 -13 22 -16 22 -229 22 -162 0 -216 -3 -219 -12z"></path>
                        <path d="M9635 9778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 3 220 c2 144 -3 291 -14 428 -9 114 -14 210 -11 214 8 7 6 11 136 -322 l109 -280 151 -3 c135 -2 151 -1 160 15 5 10 57 144 116 298 59 154 111 285 117 290 7 7 8 -17 4 -75 -3 -47 -9 -244 -12 -437 l-6 -353 221 0 221 0 0 885 0 885 -222 -2 -222 -3 -185 -427 c-102 -236 -188 -428 -191 -428 -3 0 -86 188 -184 418 -98 229 -183 423 -189 430 -7 9 -64 12 -224 12 -162 0 -215 -3 -218 -12z"></path>
                        <path d="M12010 9768 c-27 -62 -607 -1734 -603 -1740 7 -12 461 -10 468 2 4 6 30 86 59 178 l52 167 236 3 236 2 58 -177 59 -178 229 -3 c126 -1 233 1 236 5 6 6 -329 955 -596 1691 l-26 72 -199 0 c-197 0 -200 0 -209 -22z m225 -500 c3 -13 30 -126 60 -253 30 -126 55 -233 55 -237 0 -5 -58 -8 -130 -8 -71 0 -130 3 -130 8 -1 21 126 512 132 512 4 0 10 -10 13 -22z"></path>
                        <path d="M14450 9580 l0 -210 235 0 235 0 0 -675 0 -675 223 2 222 3 3 673 2 672 235 0 235 0 -2 208 -3 207 -692 3 -693 2 0 -210z"></path>
                        <path d="M16015 9778 c-3 -7 -4 -404 -3 -883 l3 -870 613 -3 612 -2 0 210 0 210 -390 0 -390 0 0 135 0 135 360 0 360 0 0 190 0 190 -360 0 -360 0 0 140 0 140 390 0 390 0 0 210 0 210 -610 0 c-479 0 -612 -3 -615 -12z"></path>
                        <path d="M17485 9778 c-3 -7 -4 -404 -3 -883 l3 -870 223 -3 222 -2 0 280 0 280 44 0 43 0 154 -211 c85 -117 177 -241 204 -278 l51 -66 259 -3 c146 -1 263 2 268 7 5 5 -46 78 -129 182 -76 96 -180 228 -232 293 l-94 120 64 30 c78 38 173 131 210 207 50 100 63 170 63 329 0 126 -3 154 -24 219 -59 180 -190 296 -399 353 -72 20 -107 22 -499 26 -346 3 -424 1 -428 -10z m834 -441 c60 -40 96 -119 87 -191 -8 -69 -47 -124 -111 -156 -47 -23 -60 -25 -205 -25 l-155 0 -3 203 -2 204 173 -4 c171 -3 174 -3 216 -31z"></path>
                        <path d="M4279 9709 c-431 -283 -736 -735 -858 -1274 -55 -243 -77 -522 -61 -794 41 -709 232 -1240 652 -1801 51 -69 168 -222 259 -340 92 -118 198 -260 236 -315 287 -417 429 -767 505 -1245 60 -382 1 -996 -122 -1267 -16 -35 -25 -65 -20 -68 12 -7 116 109 189 212 211 295 336 604 402 993 11 63 23 131 27 150 9 46 9 554 0 605 -4 22 -16 96 -27 165 -36 227 -53 303 -112 489 -115 361 -316 688 -678 1106 -333 383 -475 582 -596 830 -132 270 -207 565 -236 920 -37 458 43 898 226 1251 81 156 213 339 295 408 60 50 10 34 -81 -25z"></path>
                        <path d="M3247 8622 c-46 -81 -96 -167 -109 -192 -96 -172 -250 -452 -299 -542 -33 -60 -86 -158 -120 -218 -133 -240 -236 -665 -259 -1063 -23 -419 48 -878 188 -1205 35 -83 35 -84 66 -78 164 34 504 31 696 -4 348 -65 673 -217 962 -449 48 -38 89 -67 92 -64 9 9 -21 59 -172 288 -155 237 -308 447 -389 535 -52 58 -190 239 -287 378 -31 45 -60 82 -63 82 -12 0 -119 -64 -173 -103 -67 -50 -255 -215 -330 -291 -30 -31 -59 -56 -66 -56 -14 0 -59 99 -105 230 -58 163 -44 297 49 470 68 126 146 232 259 352 66 70 71 82 49 126 -27 55 -65 271 -66 380 -1 113 -203 -246 -362 -645 -61 -151 -70 -142 -68 70 3 262 31 419 114 642 64 170 151 327 256 460 l47 60 12 142 c17 213 77 501 160 770 11 35 16 65 11 68 -4 3 -46 -62 -93 -143z"></path>
                        <path d="M2328 7228 c-213 -419 -364 -826 -444 -1195 -18 -89 -34 -103 -52 -50 -6 17 -24 70 -40 117 -16 47 -35 111 -42 143 -7 31 -16 57 -20 57 -14 0 -143 -614 -189 -905 -36 -227 -40 -256 -61 -450 -50 -478 -79 -869 -66 -900 6 -15 25 26 77 165 38 102 89 226 113 275 l44 90 6 185 c3 102 15 254 25 337 27 208 63 413 73 413 4 0 8 -94 8 -209 0 -197 15 -551 25 -579 3 -7 53 36 121 105 l116 118 -12 197 c-22 338 3 898 40 898 13 0 18 -53 36 -350 15 -260 50 -645 59 -661 3 -4 67 29 143 73 75 44 149 85 165 90 15 6 27 12 27 14 0 3 -14 32 -30 65 -173 342 -225 936 -139 1584 21 155 66 423 75 436 2 4 0 10 -6 14 -5 3 -28 -32 -52 -77z"></path>
                        <path d="M9877 6791 c-265 -58 -462 -247 -496 -478 -16 -108 -14 -729 3 -824 21 -116 64 -197 154 -287 84 -85 166 -134 287 -172 108 -34 319 -39 440 -11 255 61 433 228 480 451 11 52 15 137 15 321 l0 249 -355 0 -355 0 2 -182 3 -183 144 -3 143 -3 -7 -57 c-3 -31 -15 -75 -25 -97 -52 -109 -247 -149 -386 -79 -49 24 -63 37 -84 79 -25 49 -25 51 -28 363 -4 360 1 404 55 462 71 80 217 100 326 47 31 -16 65 -40 75 -53 51 -73 31 -73 190 1 79 36 162 75 183 86 l40 20 -28 51 c-41 76 -166 199 -238 236 -111 55 -188 74 -325 78 -97 3 -145 0 -213 -15z"></path>
                        <path d="M20865 6800 c-71 -13 -170 -47 -240 -83 -81 -42 -204 -164 -242 -242 -56 -111 -58 -133 -58 -575 0 -401 0 -406 24 -479 60 -184 214 -324 426 -391 109 -34 320 -39 440 -11 255 61 433 228 480 451 11 52 15 137 15 321 l0 249 -355 0 -355 0 2 -182 3 -183 140 -5 140 -5 -3 -55 c-7 -135 -103 -211 -266 -210 -107 1 -192 45 -229 120 -21 43 -22 57 -25 358 -4 360 1 404 55 462 100 112 328 98 412 -24 18 -25 33 -46 35 -46 6 0 261 117 315 144 l52 27 -28 50 c-46 84 -153 191 -230 232 -115 60 -192 79 -333 83 -69 1 -147 -1 -175 -6z"></path>
                        <path d="M6255 6778 c-3 -7 -4 -404 -3 -883 l3 -870 613 -3 612 -2 0 210 0 210 -390 0 -390 0 0 135 0 135 360 0 360 0 0 190 0 190 -360 0 -360 0 0 140 0 140 390 0 390 0 0 210 0 210 -610 0 c-479 0 -612 -3 -615 -12z"></path>
                        <path d="M7725 6778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 3 338 c2 336 2 340 -28 520 -26 159 -30 202 -16 186 2 -2 38 -83 80 -179 53 -122 137 -280 275 -520 l198 -345 224 0 224 0 0 880 0 880 -217 3 -218 2 1 -412 c0 -378 2 -425 23 -555 12 -79 19 -143 15 -143 -4 0 -40 78 -80 173 -53 125 -129 272 -282 542 -115 204 -214 376 -219 383 -8 9 -63 12 -215 12 -154 0 -205 -3 -208 -12z"></path>
                        <path d="M10975 6778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 0 880 0 880 -218 3 c-168 2 -219 0 -222 -10z"></path>
                        <path d="M11705 6778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 3 337 c2 335 2 339 -28 519 -27 160 -30 204 -16 188 2 -2 38 -83 80 -179 53 -121 137 -281 275 -520 l198 -345 224 0 224 0 0 880 0 880 -217 3 -218 2 1 -412 c0 -378 2 -425 23 -555 12 -79 19 -143 15 -143 -4 0 -40 78 -80 173 -53 126 -128 270 -282 542 -115 204 -214 376 -220 383 -7 9 -62 12 -214 12 -154 0 -205 -3 -208 -12z"></path>
                        <path d="M13395 6778 c-3 -7 -4 -404 -3 -883 l3 -870 613 -3 612 -2 0 210 0 210 -390 0 -390 0 0 135 0 135 360 0 360 0 0 190 0 190 -360 0 -360 0 0 140 0 140 390 0 390 0 0 210 0 210 -610 0 c-479 0 -612 -3 -615 -12z"></path>
                        <path d="M14865 6778 c-3 -7 -4 -404 -3 -883 l3 -870 613 -3 612 -2 0 210 0 210 -390 0 -390 0 0 135 0 135 360 0 360 0 0 190 0 190 -360 0 -360 0 0 140 0 140 390 0 390 0 0 210 0 210 -610 0 c-479 0 -612 -3 -615 -12z"></path>
                        <path d="M16325 6778 c-3 -7 -4 -404 -3 -883 l3 -870 223 -3 222 -2 0 280 0 280 44 0 43 0 154 -211 c85 -117 177 -241 204 -278 l51 -66 259 -3 c150 -1 263 2 268 7 6 6 -52 86 -149 208 -87 109 -191 240 -232 292 l-74 95 62 30 c34 17 88 55 119 86 107 103 151 217 158 410 11 274 -76 449 -274 553 -145 76 -175 80 -650 85 -346 3 -424 1 -428 -10z m832 -440 c60 -39 98 -121 90 -191 -9 -70 -48 -125 -112 -157 -47 -23 -60 -25 -205 -25 l-155 0 -3 203 -2 204 173 -4 c169 -3 175 -4 214 -30z"></path>
                        <path d="M17945 6778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 0 880 0 880 -218 3 c-168 2 -219 0 -222 -10z"></path>
                        <path d="M18675 6778 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 3 340 3 340 -31 179 c-27 155 -31 202 -16 185 2 -2 38 -82 79 -177 73 -167 117 -248 364 -675 l115 -197 221 2 222 3 0 880 0 880 -217 3 -218 2 0 -412 c0 -383 2 -423 24 -555 12 -79 19 -143 15 -143 -4 0 -40 78 -80 173 -53 126 -129 271 -282 542 -115 204 -214 376 -220 383 -7 9 -62 12 -214 12 -154 0 -205 -3 -208 -12z"></path>
                        <path d="M3020 5059 c-160 -18 -385 -86 -531 -160 -162 -81 -327 -206 -464 -351 -470 -500 -568 -1265 -239 -1877 197 -366 552 -659 946 -781 174 -54 251 -64 483 -64 242 -1 331 12 518 74 930 311 1376 1375 946 2256 -181 370 -489 653 -881 808 -224 88 -520 124 -778 95z m195 -599 c308 -26 574 -145 797 -358 180 -172 300 -379 364 -630 34 -132 44 -383 20 -518 -48 -279 -180 -528 -380 -721 -79 -77 -263 -213 -288 -213 -19 0 -5 19 40 50 166 119 308 313 380 521 32 90 62 263 62 353 0 71 -34 266 -58 336 -148 426 -525 713 -967 737 -661 35 -1195 -520 -1134 -1179 33 -359 228 -654 565 -854 10 -7 16 -15 12 -19 -8 -9 -137 51 -210 99 -138 88 -243 185 -342 316 -135 179 -223 390 -251 606 -19 146 -19 225 1 365 38 274 168 534 369 734 222 222 517 356 835 378 25 2 50 4 55 5 6 1 64 -3 130 -8z m80 -874 c91 -25 232 -98 306 -160 263 -217 364 -567 258 -893 -11 -35 -24 -63 -27 -63 -4 0 -7 48 -7 108 -1 73 -7 126 -19 167 -57 193 -202 347 -392 417 -50 19 -79 22 -199 22 -128 0 -146 -2 -207 -26 -320 -127 -479 -463 -369 -781 59 -169 214 -322 384 -376 20 -7 37 -17 37 -22 0 -26 -178 7 -293 54 -310 126 -506 421 -507 759 -1 387 263 716 645 804 80 18 308 12 390 -10z"></path>
                        <path d="M6678 3790 c-218 -39 -406 -179 -464 -343 -50 -142 -32 -328 44 -451 64 -104 195 -204 322 -246 36 -12 108 -30 161 -40 101 -20 210 -59 242 -87 82 -75 43 -185 -74 -213 -80 -19 -192 -8 -277 28 -67 28 -143 78 -169 112 -12 16 -21 8 -205 -167 l-88 -84 78 -77 c118 -120 220 -179 373 -218 88 -23 284 -15 389 16 213 61 385 211 436 378 34 110 17 309 -35 409 -29 58 -119 149 -185 188 -70 41 -204 87 -341 116 -55 11 -129 34 -163 51 -55 26 -67 36 -83 74 -34 75 -4 144 78 181 49 23 65 25 130 20 83 -6 167 -40 244 -99 l46 -35 142 110 143 110 -54 54 c-96 99 -204 164 -333 200 -60 17 -291 26 -357 13z"></path>
                        <path d="M8220 3794 c-214 -39 -339 -102 -457 -227 -128 -137 -142 -205 -143 -674 0 -485 13 -538 169 -693 98 -97 162 -136 296 -176 107 -31 305 -43 423 -25 261 41 469 195 544 402 22 62 23 75 26 471 3 441 0 473 -53 579 -50 98 -162 205 -271 258 -120 59 -224 83 -374 86 -74 2 -146 2 -160 -1z m267 -420 c68 -22 126 -71 141 -122 8 -27 12 -143 12 -364 0 -316 -1 -325 -22 -368 -13 -25 -38 -55 -57 -68 -111 -73 -331 -67 -436 12 -59 45 -65 86 -65 425 0 304 6 364 41 412 23 32 114 80 173 90 56 10 150 2 213 -17z"></path>
                        <path d="M9832 3789 c-82 -14 -200 -57 -267 -97 -75 -45 -172 -142 -212 -213 -64 -113 -66 -127 -71 -534 -2 -245 0 -397 8 -450 32 -222 198 -398 450 -477 65 -20 96 -23 225 -23 138 0 156 2 231 28 105 36 189 87 264 160 64 63 153 188 142 199 -10 9 -358 168 -369 168 -5 0 -24 -21 -41 -46 -71 -99 -233 -131 -357 -69 -71 36 -101 76 -110 148 -4 29 -5 187 -3 352 3 288 4 302 25 342 76 140 327 153 454 23 l47 -47 167 67 c91 37 171 72 176 77 16 16 -63 134 -142 215 -125 127 -281 189 -474 187 -49 -1 -114 -5 -143 -10z"></path>
                        <path d="M10785 3768 c-3 -7 -4 -404 -3 -883 l3 -870 220 0 220 0 0 880 0 880 -218 3 c-168 2 -219 0 -222 -10z"></path>
                        <path d="M11515 3768 c-3 -7 -4 -404 -3 -883 l3 -870 613 -3 612 -2 0 210 0 210 -390 0 -390 0 0 135 0 135 360 0 360 0 0 190 0 190 -360 0 -360 0 0 140 0 140 390 0 390 0 0 210 0 210 -610 0 c-479 0 -612 -3 -615 -12z"></path>
                        <path d="M12880 3570 l0 -210 235 0 235 0 0 -675 0 -675 223 2 222 3 3 673 2 672 235 0 235 0 -2 208 -3 207 -692 3 -693 2 0 -210z"></path>
                        <path d="M14296 3771 c-3 -5 131 -247 299 -539 l305 -529 0 -347 0 -346 220 0 220 0 0 347 0 347 305 528 c168 291 303 533 300 538 -4 6 -105 10 -256 10 l-249 0 -161 -327 -161 -328 -161 325 -162 325 -247 3 c-143 1 -249 -2 -252 -7z"></path>
                      </g>
                    </svg>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thanks for logging in to the Hatch Booking System! We&#x27;re excited to have you on board.</p><a href="${url}" style="line-height:100%;text-decoration:none;display:block;max-width:100%;mso-padding-alt:0px;background-color:#400c1c;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-align:center;width:100%;padding:10px 10px 10px 10px" target="_blank"><span><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:15" hidden>&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">Click here to log in</span><span><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8203;</i><![endif]--></span></a>
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">If you did not request this email you can safely ignore it.</p>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                    <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">McMaster Engineering Society</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>`;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export function generateLoginEmailText({ url }: { url: string }) {
  return `Thanks for logging in to the Hatch Booking System! We're excited to have you on board.\n\nFollow this link to log in: ${url}\n\nIf you did not request this email you can safely ignore it.\n\nMcMaster Engineering Society`;
}

// Used backend type for TBookingDb because this will be called from the backend.
export function generateSuccessfulBookingEmailHtml(
  name: string,
  successfulBooking: TBookingDb,
) {
  const { startTime, endTime, createdDate, room } = successfulBooking;

  const formattedStartTime = format(startTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedEndTime = format(
    add30Minutes(endTime),
    "MMMM d, yyyy 'at' h:mm a",
  );
  const formattedCreatedDate = createdDate
    ? format(createdDate, "MMMM d, yyyy 'at' h:mm a")
    : 'Unknown';

  const helloMessage = name ? `Hi ${name}` : 'Hi';

  return `
  <body style="background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:30px 20px">
              <tbody>
                <tr>
                  <td><img src="/static/yelp-logo.png" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="border:1px solid rgb(0,0,0, 0.1);border-radius:3px;overflow:hidden">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%"><img src="/static/yelp-header.png" style="display:block;outline:none;border:none;text-decoration:none;max-width:100%" width="620" /></tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px;padding-bottom:0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column">
                            <h1 style="font-size:32px;font-weight:bold;text-align:center">${helloMessage},</h1>
                            <h2 style="font-size:26px;font-weight:bold;text-align:center">Thank you for booking a room with the Hatch Booking System. Below are your booking details.</h2>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking Start Time: </b>${formattedStartTime}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking End Time: </b>${formattedEndTime}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking Room: </b>${room}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Created at: </b>${formattedCreatedDate}</p>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                            <p style="font-size:16px;line-height:24px;margin:16px 0">If you have any questions or need further assistance, please don&#x27;t hesitate to contact us.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(0,0,0, 0.7)">McMaster Engineering Society</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  `;
}

export function generateSuccessfulBookingEmailText(
  name: string,
  successfulBooking: TBookingDb,
) {
  const { startTime, endTime, createdDate, room } = successfulBooking;

  const formattedStartTime = format(startTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedEndTime = format(
    add30Minutes(endTime),
    "MMMM d, yyyy 'at' h:mm a",
  );
  const formattedCreatedDate = createdDate
    ? format(createdDate, "MMMM d, yyyy 'at' h:mm a")
    : 'Unknown';

  const helloMessage = name ? `Hi ${name}` : 'Hi';

  return `
  ${helloMessage},


THANK YOU FOR BOOKING A ROOM WITH THE HATCH BOOKING SYSTEM. BELOW ARE YOUR
BOOKING DETAILS.



Booking Start Time: ${formattedStartTime}

Booking End Time: ${formattedEndTime}

Booking Room: ${room}

Created at: ${formattedCreatedDate}


If you have any questions or need further assistance, please don't hesitate to
contact us.

McMaster Engineering Society`;
}
