const gulp=require('gulp');
const webpack = require('webpack'); 
const  paths= require('./paths');

function _js () {
  
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    //callback();
  });
       
}
module.exports=_js;