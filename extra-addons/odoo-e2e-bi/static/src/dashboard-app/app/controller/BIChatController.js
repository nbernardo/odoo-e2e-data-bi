export class BIChatController {
    constructor(el) {
        this.el = el; // This is your main dashboard container
        this.init();
    }

    init() {
        // IDs matching the Vanilla HTML structure
        this.input = this.el.querySelector('#ai_input');
        this.container = this.el.querySelector('#chat_wrapper');
        this.agentBox = this.el.querySelector('#ai_agent_ui');
        this.questionLabel = this.el.querySelector('#ai_question_label');
        this.pillBox = this.el.querySelector('#ai_pills');
        
        // Ensure reset button exists before binding
        const resetBtn = this.el.querySelector('#ai_reset_btn');
        if (resetBtn) {
            resetBtn.onclick = () => this.showInputMode();
        }

        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const prompt = this.input.value.trim();
                if (prompt) {
                    this.handleUserPrompt(prompt);
                }
            }
        });
    }

    async handleUserPrompt(text) {
        // Visual "Thinking" state using Vanilla CSS
        this.container.style.backgroundColor = '#f9f9f9';
        this.container.classList.add('e2e-thinking'); 
        
        try {
            // Your existing Fetch/RPC call to your Agentic workflow
            const response = await this.sendToAgent(text);

            //if (response.status === 'require_clarification') {
            if (1 === 1) {
                this.showAgentMode('Key content', '1. Me, 2. You');
            } else {
                this.showInputMode();
                // Proceed to update charts/DuckDB view
            }
        } catch (error) {
            console.error("Agent Error:", error);
            this.showInputMode();
        } finally {
            this.container.classList.remove('e2e-thinking');
        }
    }

    showAgentMode(question, options = []) {
        
        this.container.style.borderColor = '#0056b3'; 
        this.questionLabel.innerText = `Agent: ${question}`;
        
        this.pillBox.innerHTML = ''; // Clear old buttons

        options.forEach(opt => {
            const btn = document.createElement('button');
            // Using the custom pill class we defined
            btn.className = 'e2e-btn-pill';
            btn.innerText = opt;
            btn.onclick = () => this.handleUserPrompt(`Selected: ${opt}`);
            this.pillBox.appendChild(btn);
        });
    }

    showInputMode() {
        this.agentBox.classList.add('e2e-hidden');
        this.input.classList.remove('e2e-hidden');
        this.container.style.borderColor = '#ccc';
        this.container.style.backgroundColor = '#fff';
        this.input.value = '';
        this.input.focus();
    }

    // Mock/Placeholder for your existing backend bridge
    async sendToAgent(text) {
        // This is where you call your Odoo controller or external API
        return await Promise.resolve({ status: 'success' }); 
    }
}