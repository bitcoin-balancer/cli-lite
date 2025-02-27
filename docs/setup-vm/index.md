[< Back](../../README.md#getting-started)

# Setting up a virtual machine

The Balancer platform is open-source and can be deployed on any UNIX-like operating system. For simplicity, this guide focuses on deploying Balancer on [DigitalOcean](https://www.digitalocean.com/).

## Creating an account

First, create a DigitalOcean account. Use a strong password, enable two-factor authentication (2FA), and securely store your recovery codes. This step is crucial to prevent unauthorized access to your account and virtual machine.



<br/>

## Creating a virtual machine (Droplet)

Balancer is lightweight and optimized to run efficiently with minimal hardware requirements.

1. Navigate to ["Droplets"](https://cloud.digitalocean.com/droplets) and click on the "Create Droplet" button.

2. Choose the ideal **region** based on the exchange platform you use. Exchanges typically host their servers close to their user base to minimize latency. Use our tool to measure request completion time for each region and exchange: [`request-latency`](https://github.com/bitcoin-balancer/request-latency).

3. Select **Ubuntu `^v24.10`** as the **OS (Operating System)**.

4. Choose the **size** of the virtual machine. Balancer runs smoothly with the following specifications (~$6/month at the time of writing this guide):

   - 1 Shared CPU
   - 1 GB Memory
   - 25 GB Storage (Regular SSD)

5. Enable an automated **backup plan**. For more information, visit: [Daily, incremental backups to keep you moving confidently](https://www.digitalocean.com/products/backups).

6. Choose **"Password"** as the **Authentication Method** and enter a strong password. Keep in mind this password will be used to interact with your Droplet.

7. Enable the **"Add improved metrics monitoring and alerting (free)"** feature.

8. To finalize the creation process, scroll all the way down and click on the **"Create Droplet"** button.

9. Finally, navigate to your Droplet and turn it on by clicking the **On/Off** toggle.



<br/>

## Interacting with your Droplet

1. Navigate to ["Droplets"](https://cloud.digitalocean.com/droplets) and click on the Droplet you created.

2. Click the **"Console"** button to access your virtual machine.



<br/><br/><br/>

# Next step

[Install dependencies](../install-dependencies/index.md)