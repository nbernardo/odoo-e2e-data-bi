/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { SpreadsheetDashboardAction } from "@spreadsheet_dashboard/bundle/dashboard_action/dashboard_action";
import { useService } from "@web/core/utils/hooks";

const CUSTOM_DASHBOARD_ID = "e2e_bi_custom";


patch(SpreadsheetDashboardAction.prototype, "e2e_bi_dashboard_patch", {

    setup() {
        this._super(...arguments);
        this.action = useService("action");
    },

    getDashboardGroups() {
        const original = this._super(...arguments);
        return [
            ...original,
            {
                id: CUSTOM_DASHBOARD_ID,
                name: "Analytics",
                dashboards: [
                    {
                        id: CUSTOM_DASHBOARD_ID,
                        displayName: "e2e-Data BI Dashboard",
                        status: "Loaded",
                    },
                ],
            },
        ];
    },

    openDashboard(dashboardId) {
        if (dashboardId === CUSTOM_DASHBOARD_ID) {
            this.action.doAction("odoo-e2e-bi.action_e2e_bi_dashboard");
            return;
        }
        this._super(...arguments);
    },
});