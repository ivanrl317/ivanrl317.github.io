document.addEventListener("DOMContentLoaded", () => {
  const chatbotWidget = document.createElement("div");
  chatbotWidget.className = "chatbot-widget";
  chatbotWidget.innerHTML = `
    <div class="chatbot-header" id="chatbot-toggle">
      <span>⚽ Asistente Bot</span>
      <button aria-label="Abrir o cerrar chat" style="background:none;border:none;color:white;cursor:pointer;">▼</button>
    </div>
    <div class="chatbot-body" id="chatbot-body" style="display: none;">
      <div class="chatbot-messages">
        <p><strong>Bot:</strong> ¡Hola! ¿En qué puedo ayudarte hoy?</p>
      </div>
      <div class="chatbot-input">
        <input type="text" placeholder="Escribe un mensaje..." aria-label="Escribe un mensaje al bot">
        <button aria-label="Enviar mensaje">Enviar</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatbotWidget);

  const toggleBtn = chatbotWidget.querySelector("#chatbot-toggle");
  const body = chatbotWidget.querySelector("#chatbot-body");

  toggleBtn.addEventListener("click", () => {
    body.style.display = body.style.display === "none" ? "flex" : "none";
  });
});
