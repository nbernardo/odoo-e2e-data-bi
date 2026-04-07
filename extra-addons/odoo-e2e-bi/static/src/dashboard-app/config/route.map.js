
        /**
         * Don't change the constante name as it'll impact on the component routing
         */
        
export const stillRoutesMap = {
    viewRoutes: {
        regular: {
            HomeComponent: {
                path: "app/home",
                url: "/HomeComponent"
            },
            BIUserInterfaceComponent: {
                path: "app/components/dataviz/bi/main",
                url: "/biu-ser-interface"
            },
            E2eBiSettingsComponent: {
                path: "app/components/settings/main",
                url: "/e2-e-bi-settings"
            },
            PivotCreateComponent: {
                path: "app/components/dataviz/bi/pivot",
                url: "/pivot-create"
            }
        },
        lazyInitial: {}
    }
}



