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
 * session.js - this highlights ember's and ember cli's dependency injection mechanism.  In this example the session service is injected into all routes and controllers.
* models
 * posts domain - models consist of the definition of the models used by ember data in your aplication.  A models responsibility is for internal mirroring of your external rest api. In the bloggs-app we have the following models:
  * post 1-* comment, user 1-* post and user 1-* comment
  * more can be read on ember data and the metadata used for models here :http://emberjs.com/guides/models/
* routes
 * the routes mirror the setup in the router.js, and follow the nested structure specified there in.
* serializers
 * application.js - I'v created an application wide serializer for rest communication which overrides the serializeHasMany function. This is mainly to solve a bug or feature in ember data for the posting of * to many relationships.  This is also illustrates that the core components in ember are very much extendable.
* services
 * session.js - services in ember are Ember.Objects that should be shared with the major components ( controllers, routes etc ).  In our case we're using it to store session state in the browser which in our case is the current user.  An initialiser has been created to inject this session service into all routers and controllers, although it could as easily be injected into specific components.
* templates
 * the templates reflect the nested structure of the routes defined in router.js
 * Partials - partials are used when in need of sharing templates between routes for example posts/p-edit.hbs is used for both editing ( posts/post.hbs ) and creating new posts ( posts/new.hbs )
   * p-heading - is used as the partial for the heading of the application.

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

