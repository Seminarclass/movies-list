module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        columbia: '#B3D8F2',
        dark: '#201D1D',
      },
      spacing: {
        22: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '42rem',
        152: '50rem',
        160: '58rem',
        168: '64rem',
      },
      fontFamily: {
        open: ['Open Sans'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
