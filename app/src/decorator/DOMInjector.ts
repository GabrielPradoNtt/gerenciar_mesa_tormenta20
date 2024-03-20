export function DOMInjector(selector: string) {
    return function(target: any, propertyKey: string) {
        let elemento: HTMLElement | null = null;
        const getter = function() {
            if (!elemento) {
                elemento = document.querySelector(selector);
                if (!elemento) throw new Error(`Elemento com seletor ${selector} não encontrado`);
            }
            
            
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey, 
            {get: getter}
        );
    }
}