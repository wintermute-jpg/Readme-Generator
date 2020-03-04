//function to create badges 
function renderBadge(license){
    return `
    [![Generic badge](https://img.shields.io/badge/license-${license}-green.svg)](https://shields.io/)`
}
//function to create licenses

function createReadMe(data) {
    return `
# ${data.title}

${renderBadge(data.license)}

### Description:
${data.description}

## Table of Contents:

* [Installation](#install-guide)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Badges](#badges)

## Install Guide
${data.install}

## Usage
${data.usage}

## License:
${data.license}

## Contributing:
${data.contributing}

## Tests:
${data.tests}

## Questions:
<img src="${data.avatar_url}" alt="${data.login}" width="30%">

User Email:
${data.email}

/Badges`
}
module.exports = createReadMe;