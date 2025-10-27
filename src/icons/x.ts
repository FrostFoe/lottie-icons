import { createLucideLottieIcon } from '../core/index.js';

const animationData = {
  v: '5.7.6',
  fr: 60,
  ip: 0,
  op: 45,
  w: 24,
  h: 24,
  nm: 'X',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'X Layer',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [12, 12, 0] },
        a: { a: 0, k: [12, 12, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [6, 6],
                    [18, 18]
                  ],
                  c: false
                }
              },
              nm: 'Left Slash',
              mn: 'ADBE Vector Shape - Group',
              hd: false
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              lc: 2,
              lj: 2,
              ml: 4,
              bm: 0,
              nm: 'Stroke 1',
              mn: 'ADBE Vector Graphic - Stroke',
              hd: false
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0]
                  },
                  {
                    i: { x: [0.667], y: [0] },
                    o: { x: [0.333], y: [0] },
                    t: 18,
                    s: [100]
                  }
                ]
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim Paths 1',
              mn: 'ADBE Vector Filter - Trim',
              hd: false
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 }
            }
          ],
          nm: 'Slash Group 1',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false
        },
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [18, 6],
                    [6, 18]
                  ],
                  c: false
                }
              },
              nm: 'Right Slash',
              mn: 'ADBE Vector Shape - Group',
              hd: false
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0, 0, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
              lc: 2,
              lj: 2,
              ml: 4,
              bm: 0,
              nm: 'Stroke 2',
              mn: 'ADBE Vector Graphic - Stroke',
              hd: false
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 12,
                    s: [0]
                  },
                  {
                    i: { x: [0.667], y: [0] },
                    o: { x: [0.333], y: [0] },
                    t: 30,
                    s: [100]
                  }
                ]
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim Paths 2',
              mn: 'ADBE Vector Filter - Trim',
              hd: false
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 }
            }
          ],
          nm: 'Slash Group 2',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: 'ADBE Vector Group',
          hd: false
        }
      ],
      ip: 0,
      op: 45,
      st: 0,
      bm: 0
    }
  ],
  markers: []
} as const;

export const X = createLucideLottieIcon({
  name: 'X',
  animationData: animationData as unknown as object,
  defaultLoop: false,
  defaultAutoplay: false,
  label: 'Cross icon'
});
