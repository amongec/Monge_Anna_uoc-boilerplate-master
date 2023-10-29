module.exports  =  { 
  syntax : 'postcss-lit' , 
  plugins : { 
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    require('tailwindcss'),
    require('autoprefixer'),
  } 
} ;
