# Dependabot Demo

This is a simple Node.js project created to demonstrate how GitHub Dependabot detects and updates vulnerable dependencies.

## ⚠️ Purpose

The project intentionally uses an outdated version of `lodash` (`4.17.19`) which is known to have a security vulnerability (CVE-2021-23337).

Dependabot is configured to automatically scan and open pull requests when safer versions are available.

## 📁 Files

- `index.js` – Basic use of lodash
- `package.json` – Defines dependencies
- `.github/dependabot.yml` – Enables Dependabot for npm

## 💡 CVE Reference

- https://nvd.nist.gov/vuln/detail/CVE-2021-23337
