// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseList = { // Badges made by: lukas-h https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  mit: {
    name: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'
  },
  apache: {
    name: 'Apache License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  gnuGv3: {
    name: 'GNU General Public License v3.0',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  bsd2: {
    name: 'BSD 2-Clause "Simplified" License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    link: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  bsd3: {
    name: 'BSD 3-Clause "New" or "Revised" License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  boost: {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  cc0: {
    name: 'Creative Commons Zero v1.0 Universal',
    badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  epl: {
    name: 'Eclipse Public License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: 'https://opensource.org/licenses/EPL-1.0'
  },
  gnuA: {
    name: 'GNU Affero General Public License v3.0',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    link: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  gnuGv2: {
    name: 'GNU General Public License v2.0',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  gnuL: {
    name: 'GNU Lesser General Public License v2.1',
    badge: '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)',
    link: 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html'
  },
  mpl: {
    name: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  unlicense: {
    name: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'http://unlicense.org/'
  },
  nolicense: {
    name: 'NO LICENSE',
    badge: '![License: NO LICENSE](https://img.shields.io/badge/license-NO_LICENSE-grey.svg)',
    link: '',
  }
};

function renderLicenseBadge(license) {
  let licenseBadge;
  Object.keys(licenseList).forEach(key => {
    if (license === licenseList[key].name){
      licenseBadge = licenseList[key].badge;
    }
    });
  return licenseBadge;
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
    Object.keys(licenseList).forEach(key => {
      if (license === licenseList.nolicense.name){
        licenseLink = '';
      } else if(license === licenseList[key].name){
        licenseLink = licenseList[key].link;
      }
    });
    return licenseLink;
  };
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseStr;
  if (license === licenseList.nolicense.name){
    licenseStr = '';
  }
  else {
    licenseStr = `## License\n
This repository is licensed by: ${license}`
  }
  return licenseStr;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, desc, toc, install, usage, license, contribute, testing, ghUser, email }) {
  return `
${renderLicenseBadge(license)}
# ${title}

## Description

${desc}

## Table of Contents

${toc}

## Installation

${install}

## Usage

${usage}

## How to Contribute

${contribute}

## Tests

${testing}

## Questions

### Contact me!
GitHub: https://github.com/${ghUser} \n
Email: ${email}

${`${renderLicenseSection(license)}\n
${renderLicenseLink(license)}
`}
`
};

export default generateMarkdown;