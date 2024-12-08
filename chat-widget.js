(function () {
    // Create the chat widget
    const createChatWidget = () => {
      // Create container
      const chatContainer = document.createElement("div");
      chatContainer.id = "chat-widget";
      chatContainer.innerHTML = `
        <div class="chat-header">Chat</div>
        <div class="chat-body"></div>
        <input class="chat-input" placeholder="Type a message" />
      `;
  
      // Add styles
      const styles = document.createElement("style");
      styles.innerHTML = `
        #chat-widget {
          position: fixed;
          bottom: 10px;
          right: 10px;
          width: 300px;
          height: 400px;
          background: #fff;
          border: 1px solid #ccc;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          flex-direction: column;
        }
        .chat-header {
          background: #007bff;
          color: white;
          padding: 10px;
          text-align: center;
          font-weight: bold;
        }
        .chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 10px;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
        .chat-input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #ccc;
        }
      `;
  
      // Append to document
      document.head.appendChild(styles);
      document.body.appendChild(chatContainer);
  
      // Add input handling
      const input = chatContainer.querySelector(".chat-input");
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          const message = input.value.trim();
          if (message) {
            const messageNode = document.createElement("div");
            messageNode.textContent = message;
            chatContainer.querySelector(".chat-body").appendChild(messageNode);
            input.value = ""; // Clear input
          }
        }
      });
    };
  
    // Initialize the widget
    createChatWidget();
  })();
  