[< Back](../../README.md#getting-started)

# Installing `cli-lite`

1. Connect to your Droplet by navigating to its page and clicking on the **"Console"** button.

2. Once connected, download the source code from [GitHub](https://github.com/bitcoin-balancer/cli-lite) by running:

   ```bash
   git clone https://github.com/bitcoin-balancer/cli-lite.git
   ```

3. Navigate to the `cli-lite` directory and install the dependencies:

   ```bash
   cd cli-lite && npm install
   ```

4. Finally, build and start the CLI:

   ```bash
   npm run build && npm start
   ```

   **Tip:** you can exit the CLI by pressing `Ctrl+c`.

<br/><br/><br/>

# Configuring `cli-lite`

If your CLI isn't running, start it with:

```bash
npm start
```

Once the CLI is initialized, it will prompt you with a form where you can input the configuration for your Balancer instance.

**Note:** these values can be easily modified in the future.

## `GUI_URL`

Enter the URL that will be used to access your Balancer GUI (Graphical User Interface).

The URL can be any domain (e.g. https://mydomain.com) or a subdomain (e.g. https://balancer.mydomain.com).



<br/>

## `TELEGRAM`

Enabling Telegram on your Balancer instance will create a communication stream that keeps you up-to-date with your position and the market state. If you wish to enable this feature, follow the ["Setup Telegram"](../setup-telegram/index.md) guide and enter the **Telegram Bot Token** and the **Chat ID** when prompted.

If you do not wish to enable Telegram, simply leave the defaults by pressing enter twice.



<br/>

## `EXCHANGE_CONFIGURATION`

You will be asked to select the quote asset you wish to trade with (Defaults to **USDT**). Additionally, you can select the exchange that will be used by the indicators and the position module (Defaults to **binance**).

<br/>

## `EXCHANGE_CREDENTIALS`

### Creating an API Key & Secret (Binance)

1. Navigate to your "Dashboard", expand the "Account" menu, and click on ["API Management"](https://www.binance.com/en/my/settings/api-management).

2. Click on the "Create API" button, select the **"System generated"** option, and name it "balancer".

3. Click on "Edit restrictions" and under "IP access restrictions", choose the option "Restrict access to trusted IPs only".

4. Enter your Droplet's IP Address (`ipv4`), confirm the input, and click on the "Save" button.

5. Click on "Edit restrictions" again and ensure that the only checked API restrictions are:
   - Enable Reading
   - Enable Spot Trading

   Then, click on the "Save" button.



<br/>

Once you have configured your account's API, enter your **API Key** and **Secret Key**.


<br/>

## `TUNNEL_TOKEN`

In order to be able to serve Balancer through a [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/), you need a domain and be able to manage its DNS records.

Follow these steps to generate your `TUNNEL_TOKEN`:

1. Log into your Cloudflare account and navigate to the "Zero Trust" section. Follow the steps and create your team. Note that you can always choose the free plan despite the apparent pay wall.

2. After completing the team creation process and being redirected to the Zero Trust Dashboard, navigate to `Networks/Tunnels` and click on **"Add a tunnel"**.

3. Select **"Cloudflared"** as your connector and click on **Next**

4. Enter the name of your tunnel (e.g. `balancer`)

5. Choose **"Docker"** as your environment and extract your `TUNNEL_TOKEN` from the command provided by Cloudflare which comes in the following format:
    ```bash
    docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token <TUNNEL_TOKEN>
    ```

6. Now that you have the `TUNNEL_TOKEN`, enter it into `cli-lite`'s prompt.

7. Finally, add the public hostnames for Balancer:
    - **gui**:
      ```text
      Subdomain: balancer
      Domain: yourdomain.com
      Path: leave this property blank
      Service Type: HTTP
      URL: gui:8090 <service-name:port>
      ```
    - **api**:
      ```text
      Subdomain: balancerapi
      Domain: yourdomain.com
      Path: leave this property blank
      Service Type: HTTP
      URL: api:5075 <service-name:port>
      ```
      **IMPORTANT:** the API must always be exposed under the `balancerapi` subdomain as its URL is derived by the GUI at runtime. For example: `balancerapi.yourdomain.com`.




<br/><br/><br/>

# Next step

Once your configuration has been saved, you're ready to `build` and `run` your Balancer instance by executing the `Docker/up` action.

When all the images have been downloaded and the containers have been created, you can access your instance through the URL you entered into `GUI_URL`.

In order to authenticate, execute the `Configuration/view-config` and make use of the `ROOT_ACCOUNT` credentials. Keep in mind that you must enter the generated `otpSecret` into your Google Authenticator to be able to generate valid OTP Tokens.