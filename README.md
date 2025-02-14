# `cli-lite`

The `cli-lite` is a lightweight yet powerful command-line interface designed to make managing Balancer's infrastructure effortless, even for non-technical users. It enables you to:

* **Quickly set up your instance** – Scaffold your Balancer instance safely and efficiently, following best practices
* **Automate infrastructure tasks** – Seamlessly handle provisioning, scaling, and monitoring with minimal effort
* **Securely access remote servers** – Connect to your production environment via secure SSH connections on  [DigitalOcean](https://www.digitalocean.com/)
* **And more!**

With its intuitive syntax and comprehensive functionality, `cli-lite` streamlines complex operations, saves time, and ensures consistency in infrastructure management.





<br/><br/><br/>

## Requirements

### Software

- UNIX-like OS
- git `^v2.43.0`
- Node.js `^v22.11.0`
- npm `^v10.9.0`
- Docker Engine `^v27.3.1`
- Docker Compose `^v2.29.7`

### Hardware

- 1 CPU
- 512 GB Memory
- 10 GB Storage





<br/><br/><br/>

## Getting Started

1. [Set up a DigitalOcean account](./docs/digital-ocean/index.md)
2. ...







<br/><br/><br/>

## Guides

- ...





<br/><br/><br/>

## CLI Actions

...





<br/><br/><br/>

## Docker Images

- [postgres](https://hub.docker.com/_/postgres)
- [jesusgraterol/balancer-api](https://hub.docker.com/r/jesusgraterol/balancer-api)
- [jesusgraterol/balancer-gui](https://hub.docker.com/r/jesusgraterol/balancer-gui)
- [jesusgraterol/balancer-ct](https://hub.docker.com/r/jesusgraterol/balancer-ct)




<br/><br/><br/>

## Tests

```bash
# run the integration tests
npm run test:integration

# run the unit tests
npm run test:unit
```





<br/><br/><br/>

## License

[Apache v2.0](https://www.apache.org/licenses/LICENSE-2.0)