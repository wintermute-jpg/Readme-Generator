function createReadMe(data) {
    return `
# ${data.title}

### Description:
${data.description}

## Table of Contents:
    * [Installation](#Install Guide)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    * [Badges](#Badges)

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
    ![User Avatar](${data.avatar_url})
    User Email:
    ${data.email}

//Badges
`
}
module.exports = createReadMe;