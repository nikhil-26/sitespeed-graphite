module.exports = async function(context, commands) {
  await commands.measure.start('http://url1.com');
  await commands.measure.start('http://url2.com');
  await commands.measure.start('http://url3.com');
  return commands.measure.start('http://url4.com');
};

