module.exports = async function(context, commands) {
  // we fetch the selenium webdriver from context
  await commands.navigate(
    'http://abcd.com/backend/users/login'
  );

  const webdriver = context.selenium.webdriver;
  const driver = context.selenium.driver;
  // before you start, make your username and password
  const userName = 'username';
  const password = 'pwd';
  //const loginForm = await driver.findElement(webdriver.By.css('form'));
  const loginInput = await driver.findElement(webdriver.By.id('fullname'));
  await loginInput.sendKeys(userName);
  const passwordInput = await driver.findElement(webdriver.By.id('passwd'));
  await passwordInput.sendKeys(password);
  await commands.click.byIdAndWait('registrationSubmit');
  // this example skips waiting for the next page and validating that the login was successful.
  //return loginForm.submit();
    // And then measure the next page
}

