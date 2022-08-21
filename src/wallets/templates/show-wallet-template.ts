export const showWalletTemplate = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Qr Profile</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -o-font-smoothing: antialiased;
        font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 1rem;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: perspective(800px);
        transform: perspective(800px);
      }
      body {
        background-color: white;
        width: 100%;
        height: 100%;
        color: #160040;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        font-size: 16px;
      }
      #qr_code {
        align-items: center;
        background-color: black;
        border-radius: 1rem;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 70%;
        justify-content: center;
        margin: 0 auto;
        padding: 1.5rem 0;
        width: 70%;
      }
      #qr_code img {
        height: auto;
        width: 50%;
      }
      #qr_code_wrapper {
        height: 90%;
        width: 90%;
      }
      #qr_code canvas {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        width: 100%;
      }
      .items-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 10px 0;
        width: 100%;
      }
      .info-item {
        align-items: start;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0 auto;
        padding: 8px 4px;
        width: 90%;
      }
      .info-item-title {
        font-size: 1.8rem;
        width: 100%;
        font-weight: bold;
      }
      .info-item-value {
        width: 100%;
        font-size: 0.6rem;
        padding: 4px 8px;
        border-radius: 6px;
        background-color: #18004610;
        overflow-x: auto;
      }
      @media screen and (min-width: 600px) {
        body {
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="items-container">
        <div class="info-item">
          <span
            class="info-item-title"
            style="text-align: center; margin-bottom: 2rem"
          >
            MY DID
          </span>
        </div>
      </div>
      <div id="qr_code" class="left-bottom">
        <div id="qr_code_wrapper"></div>
        <img
          src="data:image/png;base64,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"
        />
      </div>
      <div class="items-container" style="padding-top: 2rem">
        <div class="info-item">
          <span class="info-item-title">CONTEXT</span>
          <code class="info-item-value prettyprint">{{DID_CONTEXT}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">ID</span>
          <code class="info-item-value prettyprint">{{DID_ID}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">PUBLIC KEY</span>
          <code class="info-item-value prettyprint">{{DID_PUBLIC_KEY}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">AUTHENTICATION</span>
          <code class="info-item-value prettyprint">
            {{DID_AUTHENTICATION}}
          </code>
        </div>
        <div class="info-item">
          <span class="info-item-title">SERVICE</span>
          <code class="info-item-value prettyprint">{{DID_SERVICE}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">ALLOWERS</span>
          <code class="info-item-value prettyprint">{{DID_ALLOWERS}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">PROOF</span>
          <code class="info-item-value prettyprint">{{DID_PROOF}}</code>
        </div>
        <div class="info-item">
          <span class="info-item-title">UPDATE</span>
          <code class="info-item-value prettyprint">{{DID_UPDATE}}</code>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
      type="application/javascript"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.min.js"></script>
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    <script>
      "use strict";
      window.onload = function () {
        var address = "{{ADDRESS}}";

        QrCreator.render(
          {
            text: address,
            radius: 0.5, // 0.0 to 0.5
            ecLevel: "H", // L, M, Q, H
            fill: "#402281", // foreground color
            background: "#fff", // color or null for transparent
          },
          document.getElementById("qr_code_wrapper")
        );
      };
    </script>
  </body>
</html>
`;
