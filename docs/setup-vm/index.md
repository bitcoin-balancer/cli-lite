[< Back](../../README.md#getting-started)

# Setting up a virtual machine

The Balancer platform is fully open-source and can be deployed on any machine running a UNIX-like operating system. However, for simplicity, this guide focuses on deploying Balancer on [DigitalOcean](https://www.digitalocean.com/).



## Creating an account

The first step is to create a DigitalOcean account. Ensure you use a strong password, enable two-factor authentication (2FA), and securely store your recovery codes. This step is crucial—if an unauthorized person gains access to your DigitalOcean account, they could also access your virtual machine and any sensitive data it contains.



## Choosing a virtual machine (Droplet)

The Balancer platform is lightweight and optimized to run efficiently with minimal hardware requirements. To deploy an instance, ensure your virtual machine meets the following specifications:

- 1 vCPU
- 512 MB Memory
- 10 GB Storage

These specifications are sufficient to run Balancer smoothly while keeping costs low.



## Selecting a region for your virtual machine

The ideal region for your virtual machine depends on the exchange platform you use, as exchanges typically host their servers close to their user base to minimize latency.

To simplify the selection process, we’ve developed a tool that measures the request completion time for each region.

To find the optimal region for your instance, visit:

[`request-latency`](https://github.com/bitcoin-balancer/request-latency)



## Enabling automatic backups

DigitalOcean offers automatic daily backups for your Droplet, ensuring your data remains safe and allowing you to restore a previous snapshot if needed. This feature provides an extra layer of security in case something goes wrong. 

For more information, visit:

[Daily, incremental backups to keep you moving confidently](https://www.digitalocean.com/products/backups)





<br/>
<br/>
<br/>

# Next step

[Install dependencies](../install-dependencies/index.md)