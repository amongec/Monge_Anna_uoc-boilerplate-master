module.exports  =  { 
  syntax : 'postcss-lit' , 
  plugins : { 
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
    [require('tailwindcss'),
    require('autoprefixer')],
  } 
} ;
