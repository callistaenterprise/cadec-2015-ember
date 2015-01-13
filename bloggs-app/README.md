# Solution - bloggs-app

Bloggs-app is used as the solution or reference application for the tutorial.  
It's purpose is to demonstrate the core concepts of ember and ember cli.
The list below highlights where these are demonstrated :
* adapters
 * application.js - demonstrates overriding the default namespace for the rest url, this would amount to all rest urls being prefixed with api, e.g. api/users, api/posts
* components
* controllers - these are present to reflect the routes in router.js
 * computed properties - application.js has computed properties for the username
 * actions - these are present in all editing controllers, such as posts/post.js (edit, done, cancel)
* helpers
 * date-time - helper utilizing moment.js
 * markdown-formatter.js - helper for markdown support, this is used when editing a blog
* initializers
* models
* routes
* serializers
* services
* templates

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the cloned directory cadec-2015-ember
* `cd cadec-2015-ember`
* You will see a list of exercise and final solution ( bloggs-app ) directories. 
* Cd into the bloggs-app dir
* `cd bloggs-app`
* Install both npm and bower module dependencies with :
* 
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

