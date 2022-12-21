const generateMarkdown = data => {
  return `# ${(data.title)}
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)}) 
  

  ## Username
  ${data.username}

  ## Table of Contents
  - [Description]
  - [Installation]
  - [Usage]
  - [License]
  - [Contributions]
  - [Tests]
  

  ## Description
  ${data.description}


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## BadgeLabel
  ${data.badgeLabel}
  `;
}
