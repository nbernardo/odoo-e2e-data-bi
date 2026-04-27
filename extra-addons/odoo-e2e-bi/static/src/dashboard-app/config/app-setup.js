import { StillAppMixin } from "../@still/component/super/AppMixin.js";
import { Components } from "../@still/setup/components.js";
import { Assets } from "../@still/util/componentUtil.js";
import { HomeComponent } from "../app/home/HomeComponent.js";
import { AppTemplate } from "./app-template.js";

export class StillAppSetup extends StillAppMixin(Components) {

    constructor() {
        super();
        this.setHomeComponent(HomeComponent);
        
        (async () => {
            await Assets.import({ path: 'https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js' });
            await Assets.import({ path: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.46.0/min/vs/loader.min.js' });
            
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.46.0/min/vs' } });
            require(['vs/editor/editor.main'], (monaco) => {
                monaco.languages.registerCompletionItemProvider('python', {
                    provideCompletionItems: () => ({ suggestions: CodeEditorUtil.getPythonSuggestions() }),
                });
                window.monaco
            });
        })();
    }

    async init() {
        return await AppTemplate.newApp();
    }

}
