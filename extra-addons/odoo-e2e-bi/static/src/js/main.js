/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState } = owl;

export class Main extends Component {
    setup() {
        this.state = useState({ counter: 0 });
    }

    increment() {
        this.state.counter++;
    }
}

Main.template = "odoo-e2e-bi.Main";

// This registers the component so your action can find it
registry.category("actions").add("open_e2e_bi_application", Main);