/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component } = owl;

export class Main extends Component {
    get iframeUrl(){        
        const timestamp = new Date().getTime();
        return `/odoo-e2e-bi/static/binder/main.html?v=${timestamp}`;
    }
}

Main.template = "odoo-e2e-bi.Main";

// This registers the component so your action can find it
registry.category("actions").add("open_e2e_bi_application", Main);