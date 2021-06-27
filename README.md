# airtable
airtable cypress test


# Download application
git clone git@github.com:sunnyg522/airtable.git

# Install dependencies

Make sure you have latest version of node and then run following command

npm install

# run automation
npx cypress run ./cypress/integration/aritable/signup.spec.js


├── README.md
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── airtable
│   │       └── signup.spec.js
│   ├── plugins
│   │   └── index.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   └── videos
│       └── aritable
│           └── signup.spec.js.mp4
├── cypress.json
├── package-lock.json
└── package.json
