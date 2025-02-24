# `cli-lite`

The `cli-lite` is a lightweight yet powerful command-line interface designed to make managing Balancer's infrastructure effortless, even for non-technical users. It enables you to:

* **Quickly set up your instance** – Scaffold your Balancer instance safely and efficiently, following best practices
* **Automate infrastructure tasks** – Seamlessly handle provisioning, scaling, and monitoring with minimal effort
* **Securely access remote servers** – Connect to your production environment via secure SSH connections on  [DigitalOcean](https://www.digitalocean.com/)
* **And more!**

With its intuitive syntax and comprehensive functionality, `cli-lite` streamlines complex operations, saves time, and ensures consistency in infrastructure management.





<br/><br/><br/>

## Usage

Navigate into `cli-lite` directory and start the program:
```bash
cd cli-lite
npm start
```






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

1. [Set up a virtual machine (DigitalOcean)](./docs/setup-vm/index.md)
2. ...





<br/><br/><br/>

## CLI Actions

### Docker Compose

<details>
  <summary><code>up</code></summary>

  <br/>
  
  Generates the environment assets and the `compose.yaml` file. Next, it prunes docker objects and restarts the daemon. Finally, it pulls the latest images from the  registry, creates and starts the containers.

  <br/>

  When executed, after generating the environment assets and the `compose.yaml` file, it runs:
  ```bash
  docker system prune --all --force

  systemctl restart docker

  docker compose up --pull always --no-build --detach
  ```

  <br/>

</details>

<details>
  <summary><code>down</code></summary>

  <br/>

  Stops containers and removes containers, networks, volumes, and images created by <code>up</code>.

  <br/>

  When executed, it runs:
  ```bash
  docker compose down
  ```

  <br/>

</details>

<details>
  <summary><code>down-up</code></summary>

  <br/>

  Stops containers and removes containers, networks, volumes, and images created by <code>up</code> with:

  <br/>

  ```bash
  docker compose down
  ```

  <br/>

  Finally, it generates the environment assets, the `compose.yaml` file and runs: 

  <br/>

  ```bash
  docker system prune --all --force

  systemctl restart docker

  docker compose up --pull always --no-build --detach
  ```
  <br/>

  <br/>
</details>

<details>
  <summary><code>restart</code></summary>

  <br/>

  Restarts all stopped and running services with:

  <br/>

  ```bash
  docker compose restart
  ```

  <br/>

</details>

<details>
  <summary><code>logs</code></summary>

  <br/>

  Displays and subscribes to the log output from all services. If a variation is provided, it narrows down the logs to a specific service.

  ```bash
  docker compose logs -f

  # if a variation is provided
  docker compose logs <variation> -f
  ```

  <br/>

  The following variations are supported:

  - <code>logs:postgres</code> displays log output from the postgres service

  - <code>logs:api</code> displays log output from the api service

  - <code>logs:gui</code> displays log output from the gui service

  - <code>logs:ct</code> displays log output from the cloudflared service

  <br/>

</details>

<details>
  <summary><code>prune</code></summary>

  <br/>

  Removes all unused containers, networks and images (both dangling and unused) with:

  ```bash
  docker system prune --all --force
  ```

  <br/>
  
</details>

<details>
  <summary><code>restart-daemon</code></summary>

  <br/>

  Restarts the Docker service on the host machine with:

  ```bash
  systemctl restart docker
  ```

  <br/>
  
</details>



<br/>

### Configuration

<details>
  <summary><code>view-config</code></summary>

  <br/>

  Displays the data stored in the `config.json` file.

  <br/>
  
</details>

<details>
  <summary><code>update-config-*</code></summary>

  <br/>

  Updates the mutable properties in the `config.json` file one at a time. The following properties are mutable and can be changed by this action:

  - `GUI_URL`
  - `TELEGRAM`
  - `EXCHANGE_*`
  - `TUNNEL_TOKEN`

  <br/>
  
</details>



<br/>

### CLI Management

<details>
  <summary><code>update-cli</code></summary>

  <br/>

  Downloads the latest version of `cli-lite`, installs its dependencies, and compiles it.

  <br/>

  When executed, it runs:

  ```bash
  git pull origin main

  npm ci

  npm run build
  ```

  <br/>
  
</details>



<br/>

### Database Management

<details>
  <summary><code>psql</code></summary>

  <br/>

  Starts the terminal-based front-end to PostgreSQL.

  <br/>

  When executed, it runs:

  ```bash
  docker compose exec -it postgres psql -U postgres
  ```

  <br/>
  
</details>




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