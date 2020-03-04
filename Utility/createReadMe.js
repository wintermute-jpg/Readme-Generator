function createReadMe(data) {
    return `
# ${data.title}

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

//Badges`
}
module.exports = createReadMe;