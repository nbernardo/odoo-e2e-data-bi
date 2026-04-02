/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component } = owl;

export class Settings extends Component {}

Settings.template = "odoo-e2e-bi.Settings";

registry.category("actions").add("open_e2e_bi_application_setting", Settings);