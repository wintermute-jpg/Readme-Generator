//function to create badges 
function renderBadge(license){
    return `[![Generic badge](https://img.shields.io/badge/license-${license}-green.svg)](https://shields.io/)`
}

//function if null license
function handleLicense(license){
    if(license === "N/A"){
        return `No applicable license`
    } else {
        return license
    }
};
//function if no email
function handleEmail(email){
    if(email === null){
        return `No email found`
    } else {
        return email
    }
};

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
${handleLicense(data.license)}

## Contributing:
${data.contributing}

## Tests:
To preform a test run the following command: ${data.tests}

## Questions:
<img src="${data.avatar_url}" alt="${data.login}" width="30%">

User Email:
${handleEmail(data.email)}
`
}
module.exports = createReadMe;