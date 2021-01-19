module.exports = async function(context, commands) {
  await commands.measure.start('http://beta.piana.in/sahapedia2.0/backend/users/login');
  await commands.measure.start('http://beta.piana.in/sahapedia2.0/backend/blogs/dashboard_saha2');
  await commands.measure.start('http://beta.piana.in/sahapedia2.0/backend/blogs/sahapedia_addPoi');
  return commands.measure.start('http://beta.piana.in/sahapedia2.0/backend/blogs/sahapedia_articles');
};

