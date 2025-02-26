[< Back](../../README.md#getting-started)

# Installing dependencies

While Balancer operates independently without relying on third-party services, it does require certain open-source software to be installed on the host machine running the instance. Ensuring these dependencies are properly set up is essential for a smooth deployment.

Before proceeding, run the following command to update the packages used by the OS:

```bash
sudo apt update -y && sudo apt upgrade -y && sudo apt-get update -y && sudo apt-get upgrade -y
```

**Tip:** you can paste into the terminal by pressiong `Ctrl+Shift` and then `V`.


<br/>

## Installing [Docker](https://www.docker.com/)

1. Set up Docker's apt repository:

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Install the Docker Packages:

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

3. Verify that the installation is successful by running the `hello-world` image:

```bash
sudo docker run hello-world
```

<br/>

For more information, visit:

[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)





<br/>

## Installing [`nvm`](https://github.com/nvm-sh/nvm)

The `nvm` bash script can be installed as follows:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# if the above command fails, run this one:
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Once `nvm`'s installation is complete, install the version required by Balancer (Node.js `^22.11.0` & npm `^10.9.0`):

```bash
# install the specific version
nvm install 22.11.0

# activate it
nvm use 22.11.0
```

If you get the error **nvm: command not found** or see no feedback on the terminal, reboot the machine by running the following command: `reboot now`.


Finally, verify the installation was successful:

```bash
node --version
# v22.11.0

npm --version
# 10.9.0
```

<br/>

For more information, visit:

[Installing and Updating `nvm`](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)





<br/>

## Installing [`landscape-sysinfo`](https://manpages.ubuntu.com/manpages/xenial/man1/landscape-sysinfo.1.html)

Newer versions of Ubuntu Server come with `landscape-sysinfo` preinstalled. However, if it's not available on your machine, you can install it by running:

```bash
sudo apt install landscape-common
```



<br/><br/><br/>

# Next step

[Install and configure the `cli-lite`](../install-configure-cli-lite/index.md)