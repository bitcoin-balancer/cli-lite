[< Back](../../README.md#getting-started)

# Setting up a virtual machine

The Balancer platform is fully open-source and can be deployed on any machine running a UNIX-like operating system. However, for simplicity, this guide focuses on deploying Balancer on [DigitalOcean](https://www.digitalocean.com/).



## Creating an account

The first step is to create a DigitalOcean account. Ensure you use a strong password, enable two-factor authentication (2FA), and securely store your recovery codes. This step is crucial—if an unauthorized person gains access to your DigitalOcean account, they could also access your virtual machine and any sensitive data it contains.



<br/>

## Creating a virtual machine (Droplet)

The Balancer platform is lightweight and optimized to run efficiently with minimal hardware requirements.

1. Navigate to ["Droplets"](https://cloud.digitalocean.com/droplets) and click on the "Create Droplet" button.

2. Choosing the ideal **region** for your virtual machine depends on the exchange platform you use, as exchanges typically host their servers close to their user base to minimize latency.

   To simplify the selection process, we’ve developed a tool that measures the request completion time for each region and exchange. To find the optimal region for your virtual machine, visit: [`request-latency`](https://github.com/bitcoin-balancer/request-latency).

3. Next, choose **Ubuntu `^v24.10`** as the **OS (Operating System)** to be installed on the machine.

4. Later, you'll be asked to select the **size** of the virtual machine. Balancer runs smoothly in a virtual machine with the following specifications (~$6/month at the time of writing this guide):

   - 1 Shared CPU
   - 1 GB Memory
   - 25 GB Storage (Regular SSD)


5. Enable an automated **backup plan**. For more information, visit: [Daily, incremental backups to keep you moving confidently](https://www.digitalocean.com/products/backups).

6. Then, choose **"Password"** as the **Authentication Method** and enter a strong password which will be used to interact with your virtual machine. 

7. Enable the **"Add improved metrics monitoring and alerting (free)"** feature

8. To finalize the creation process, scroll all the way down and click on "Create Droplet".

9. Finally, navigate to your Droplet and turn it on by clicking on the **On/Off** toggle.





<br/><br/><br/>

# Next step

[Install dependencies](../install-dependencies/index.md)