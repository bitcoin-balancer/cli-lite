[< Back](../../README.md#getting-started)

# Installing `cli-lite`

1. Connect to your Droplet by navigating to its page and clicking on the **"Console"** button

2. Once the connection has been established, download the source code from [GitHub](https://github.com/bitcoin-balancer/cli-lite) by running:

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

   **Tip:** you can exit the CLI by pressing `Ctrl+c`




<br/><br/><br/>

# Configuring `cli-lite`

If your CLI isn't running, start it with:

```bash
npm start
```

Once the CLI is initialized, it will prompt you with a form where you will be able to input the configuration that will be used by your Balancer instance.

**Note:** these values can be easily modified in the future.

## `GUI_URL`

If you own a domain and are going to setup a [Cloudflare Tunnel](../setup-cloudflare-tunnel/index.md), enter the URL to your domain (e.g https://yourdomain.com). Alternatively, you can make use of a subdomain as follows: https://balancer.yourdomain.com.

Otherwise, enter your Droplet's IP Address (`ipv4`) followed by the GUI's port (`8090`). For example: http://143.244.128.76:8090.


<br/>

## `TELEGRAM`

Enabling Telegram on your Balancer instance will create a communication stream that will keep you up-to-date with your position and the market state in general. If you wish to do so, follow the ["Setup Telegram"](./docs/setup-telegram/index.md) guide and enter the **Telegram Bot Token** and the **Chat ID** when prompted.

If you do not wish to enable Telegram, simply leave the defaults by pressing enter twice.



<br/>

## `EXCHANGE_CONFIGURATION`

You will be asked to select the quote asset you wish to trade with (Defaults to **USDT**). Additionally, you will be able to select the exchange that will be used by the indicators and the position module (Defaults to **binance**).



<br/>

## `EXCHANGE_CREDENTIALS`

### Creating an API Key & Secret (Binance)

1. Navigate to your "Dashboard", expand the "Account" menu and click on ["API MAnagement"](https://www.binance.com/en/my/settings/api-management).

2. Click on the "Create API" button, select the **"System generated"** option and name it "balancer".

3. Click on "Edit restrictions" and under "IP access restrictions", choose the option "Restrict access to trusted IPs only".

4. Enter your Droplets IP Address (`ipv4`), confirm the input and click on the "Save" button.

5. Click on "Edit restrictions" again and make sure that the only checked API restrictions are:
   - Enable Reading
   - Enable Spot Trading

   Then, click on the "Save" button.



<br/>

Once you have configured your account's API, enter your **API Key** and **Secret Key**.


<br/>

## `TUNNEL_TOKEN`

Setting up a [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) increases the security and reliability of your Balancer instance significantly for very little effort and allows you to serve your Balancer instance through a domain you own. 

If you with to enable this feature go through the ["Setup a Cloudflare Tunnel"](../setup-cloudflare-tunnel/index.md) guide and enter the **Tunnel Token** once you have generated it.

Otherwise, just press enter to continue.



<br/><br/><br/>

# Next step

[Setup a Cloudflare Tunnel](../setup-cloudflare-tunnel/index.md)