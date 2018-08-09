Tests run on either chrome or firefox browsers.
A selenium hub with 2 nodes run on docker as part of the test pre-setup.

Run tests on chrome
```
SELENIUM_BROWSER=chrome npm run test
```

Run tests on firefox
```
SELENIUM_BROWSER=firefox npm run test
```

Mochawesome reports will auto-open once the tests are complete.