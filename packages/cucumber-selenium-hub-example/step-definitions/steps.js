import { Given, Then } from 'cucumber';
import { client } from 'nightwatch-api';

Given(/^I open Google`s search page$/, async () => {
  await client.url('http://google.com');
  //client.execute('Digy_SendResult("100", "Test_Digy4_HomePage", "PASS");');
});

Given(/^I open DuckDuckGo search page$/, async () => {
  await client.url('https://duckduckgo.com/');
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.title(text);
});

Then(/^the Google search form exists$/, async () => {
  await client.assert.visible('input[name="q"]');
});

Then(/^the DuckDuckGo search form exists$/, async () => {
  await client.assert.visible('#search_form_homepage');
});
